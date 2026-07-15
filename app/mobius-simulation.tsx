"use client";

import { useEffect, useRef, useState } from "react";

type Point3 = { x: number; y: number; z: number };
type Point2 = Point3 & { px: number; py: number; scale: number };

const TAU = Math.PI * 2;

function mobius(u: number, v: number): Point3 {
  const radius = 1.55;
  return {
    x: (radius + v * Math.cos(u / 2)) * Math.cos(u),
    y: (radius + v * Math.cos(u / 2)) * Math.sin(u),
    z: v * Math.sin(u / 2),
  };
}

function rotate(point: Point3, turn: number): Point3 {
  const yaw = turn * 0.18 - 0.5;
  const pitch = -0.72;
  const x1 = point.x * Math.cos(yaw) - point.z * Math.sin(yaw);
  const z1 = point.x * Math.sin(yaw) + point.z * Math.cos(yaw);
  return {
    x: x1,
    y: point.y * Math.cos(pitch) - z1 * Math.sin(pitch),
    z: point.y * Math.sin(pitch) + z1 * Math.cos(pitch),
  };
}

function project(point: Point3, width: number, height: number): Point2 {
  const camera = 7.4;
  const focal = Math.min(width, height) * 1.46;
  const scale = focal / (camera - point.z);
  return {
    ...point,
    px: width / 2 + point.x * scale,
    py: height / 2 + point.y * scale,
    scale,
  };
}

export default function MobiusSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let start = performance.now();
    let frozenAt = 0;

    const draw = (elapsed: number) => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);

      if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
      }

      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const turn = elapsed / 30000;
      const strips: Array<{ points: Point2[]; depth: number; shade: number }> = [];
      const uSteps = 88;
      const vSteps = 10;

      for (let ui = 0; ui < uSteps; ui += 1) {
        const u1 = (ui / uSteps) * TAU;
        const u2 = ((ui + 1) / uSteps) * TAU;
        for (let vi = 0; vi < vSteps; vi += 1) {
          const v1 = -0.58 + (vi / vSteps) * 1.16;
          const v2 = -0.58 + ((vi + 1) / vSteps) * 1.16;
          const vertices = [
            rotate(mobius(u1, v1), turn),
            rotate(mobius(u2, v1), turn),
            rotate(mobius(u2, v2), turn),
            rotate(mobius(u1, v2), turn),
          ];
          const depth = vertices.reduce((sum, point) => sum + point.z, 0) / 4;
          strips.push({
            points: vertices.map((point) => project(point, width, height)),
            depth,
            shade: (Math.sin(u1 / 2) + 1) / 2,
          });
        }
      }

      strips.sort((a, b) => a.depth - b.depth);
      for (const strip of strips) {
        context.beginPath();
        context.moveTo(strip.points[0].px, strip.points[0].py);
        for (let index = 1; index < strip.points.length; index += 1) {
          context.lineTo(strip.points[index].px, strip.points[index].py);
        }
        context.closePath();
        const light = 93 - strip.shade * 12 + strip.depth * 2.6;
        context.fillStyle = `hsl(258 62% ${light}%)`;
        context.fill();
        context.strokeStyle = "rgba(83, 58, 138, 0.12)";
        context.lineWidth = 0.55;
        context.stroke();
      }

      const phase = (turn % 1) * Math.PI * 4;
      const pathU = phase % TAU;
      const pathV = phase < TAU ? 0.36 : -0.36;
      const ball = project(rotate(mobius(pathU, pathV), turn), width, height);
      const ballRadius = Math.max(8, ball.scale * 0.105);

      context.save();
      context.globalAlpha = ball.z < -0.12 ? 0.58 : 1;
      context.beginPath();
      context.ellipse(
        ball.px + ballRadius * 0.24,
        ball.py + ballRadius * 0.88,
        ballRadius * 0.95,
        ballRadius * 0.34,
        0,
        0,
        TAU,
      );
      context.fillStyle = "rgba(35, 30, 48, 0.18)";
      context.fill();

      const metal = context.createRadialGradient(
        ball.px - ballRadius * 0.34,
        ball.py - ballRadius * 0.42,
        ballRadius * 0.1,
        ball.px,
        ball.py,
        ballRadius,
      );
      metal.addColorStop(0, "#ffffff");
      metal.addColorStop(0.18, "#c9c8ce");
      metal.addColorStop(0.46, "#6e6c75");
      metal.addColorStop(0.78, "#2f2d34");
      metal.addColorStop(1, "#111014");
      context.beginPath();
      context.arc(ball.px, ball.py, ballRadius, 0, TAU);
      context.fillStyle = metal;
      context.fill();
      context.strokeStyle = "rgba(30, 27, 36, 0.55)";
      context.lineWidth = 1;
      context.stroke();
      context.restore();
    };

    const animate = (now: number) => {
      if (pausedRef.current || reduceMotion.matches) {
        if (!frozenAt) frozenAt = now - start;
        draw(frozenAt || 8500);
      } else {
        if (frozenAt) {
          start = now - frozenAt;
          frozenAt = 0;
        }
        draw(now - start);
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mobius-card">
      <div className="simulation-topline">
        <span>Continuous system · 01</span>
        <button type="button" onClick={() => setPaused((value) => !value)}>
          {paused ? "Play" : "Pause"}
        </button>
      </div>
      <canvas ref={canvasRef} className="mobius-canvas" aria-hidden="true" />
      <div className="simulation-caption">
        <span>Möbius study</span>
        <p>One surface. One edge. A tungsten traveler with nowhere to fall off.</p>
      </div>
    </div>
  );
}
