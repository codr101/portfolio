import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenny Mai - Senior Software Engineer",
  description: "Senior Software Engineer | TypeScript, Java, Python, C#, Golang | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

