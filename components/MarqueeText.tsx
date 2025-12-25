"use client";

interface MarqueeTextProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function MarqueeText({
  children,
  direction = "left",
  speed = 80,
  className = "",
}: MarqueeTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ 
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          willChange: 'transform'
        }}
      >
        <div className="flex items-center mr-16">{children}</div>
        <div className="flex items-center mr-16">{children}</div>
        <div className="flex items-center mr-16">{children}</div>
      </div>
    </div>
  );
}

