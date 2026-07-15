"use client";

import { useEffect, useRef } from "react";

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
      const strips: Array<{
        points: Point2[];
        depth: number;
        light: number;
        saturation: number;
        hue: number;
      }> = [];
      const uSteps = 96;
      const vSteps = 16;
      const lightDirection = { x: -0.42, y: -0.7, z: 0.58 };

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
          const edgeA = {
            x: vertices[1].x - vertices[0].x,
            y: vertices[1].y - vertices[0].y,
            z: vertices[1].z - vertices[0].z,
          };
          const edgeB = {
            x: vertices[3].x - vertices[0].x,
            y: vertices[3].y - vertices[0].y,
            z: vertices[3].z - vertices[0].z,
          };
          const normal = {
            x: edgeA.y * edgeB.z - edgeA.z * edgeB.y,
            y: edgeA.z * edgeB.x - edgeA.x * edgeB.z,
            z: edgeA.x * edgeB.y - edgeA.y * edgeB.x,
          };
          const length = Math.hypot(normal.x, normal.y, normal.z) || 1;
          const diffuse = Math.abs(
            (normal.x * lightDirection.x +
              normal.y * lightDirection.y +
              normal.z * lightDirection.z) /
              length,
          );
          const specular = Math.pow(diffuse, 9);
          const edgeSheen = Math.pow(Math.abs((vi + 0.5) / vSteps - 0.5) * 2, 2.2);
          strips.push({
            points: vertices.map((point) => project(point, width, height)),
            depth,
            light: 62 + diffuse * 19 + specular * 13 + edgeSheen * 4,
            saturation: 28 + diffuse * 22,
            hue: 252 + Math.sin(u1 / 2) * 10,
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
        const fill = `hsl(${strip.hue} ${strip.saturation}% ${Math.min(95, strip.light + strip.depth * 1.8)}%)`;
        context.fillStyle = fill;
        context.fill();
        context.strokeStyle = fill;
        context.lineWidth = 0.8;
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
      if (reduceMotion.matches) {
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
      <canvas
        ref={canvasRef}
        className="mobius-canvas"
        role="img"
        aria-label="An animated metallic purple Möbius strip with a tungsten ball traveling along its surface"
      />
    </div>
  );
}
