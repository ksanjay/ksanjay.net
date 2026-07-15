import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ksanjay.net"),
  title: "Sanjay Kalyanasundaram — Product Builder, Writer & Investor",
  description:
    "Sanjay Kalyanasundaram builds ambitious products where emerging technology meets real business value.",
  openGraph: {
    title: "Sanjay Kalyanasundaram",
    description: "Product builder. Writer. Investor.",
    url: "https://www.ksanjay.net",
    siteName: "Sanjay Kalyanasundaram",
    type: "website",
    images: [
      {
        url: "/og-mobius.png",
        width: 1200,
        height: 630,
        alt: "Sanjay Kalyanasundaram — Product Builder, Writer, Investor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Kalyanasundaram",
    description: "Product builder. Writer. Investor.",
    images: ["/og-mobius.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
