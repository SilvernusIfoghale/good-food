import type { RatingMetric } from "../../types";

interface RatingChartProps {
  metrics: RatingMetric[];
  title: string;
  description: string;
}

interface BubbleProps {
  metric: RatingMetric;
  size: "sm" | "lg";
  className: string;
  textClassName?: string;
  zIndex?: number;
}

const Bubble: React.FC<BubbleProps> = ({
  metric,
  size,
  className,
  textClassName,
  zIndex,
}) => {
  const isLarge = size === "lg";
  const ringGap = isLarge ? 8 : 6;
  const arcThickness = 2.5;

  // Rotated slightly downward (moved gap towards 9 o'clock)
  const rotation = "-20deg";

  return (
    <div
      className={`absolute rounded-full flex items-center justify-center text-center select-none ${
        isLarge ? "w-46.25 h-46.25" : "w-28.75 h-28.75"
      } ${className}`}
      style={{
        backgroundColor: metric.color,
        zIndex: zIndex ?? (isLarge ? 10 : 1),
      }}
    >
      {/* Partial arc ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          inset: -ringGap,
          border: `${arcThickness}px solid ${metric.color}`,
          maskImage: `conic-gradient(from ${rotation}, black 0deg 280deg, transparent 280deg 360deg)`,
          WebkitMaskImage: `conic-gradient(from ${rotation}, black 0deg 280deg, transparent 280deg 360deg)`,
        }}
      />

      <div className={`relative ${(textClassName ?? "").trim()}`.trim()}>
        <p
          className={`${
            isLarge ? "text-[34px]" : "text-[22px]"
          } font-bold text-white leading-none`}
        >
          {metric.value}%
        </p>
        <p
          className={`${
            isLarge ? "text-[14px]" : "text-[11px]"
          } font-normal text-white/90 mt-1`}
        >
          {metric.label}
        </p>
      </div>
    </div>
  );
};

export const RatingChart: React.FC<RatingChartProps> = ({
  metrics,
  title,
  description,
}) => {
  const foodTaste = metrics.find((m) => m.label === "Food Taste") || metrics[0];
  const hygiene =
    metrics.find((m) => m.label === "Hygiene") || metrics[1] || metrics[0];
  const packaging =
    metrics.find((m) => m.label === "Packaging") || metrics[2] || metrics[0];

  return (
    <div className="bg-white rounded-2xl p-8 h-full">
      <div className="mb-10">
        <h3 className="text-[14px] font-normal text-black mb-1">{title}</h3>
        <p className="text-[12px] text-light-gray">{description}</p>
      </div>

      <div className="flex justify-center items-center pb-12">
        <div className="relative w-full max-w-85 h-55">
          {/* Packaging - Bottom Left */}
          <Bubble
            metric={packaging}
            size="sm"
            className="left-0 -bottom-4"
            textClassName="pb-1"
          />
          {/* Hygiene - Top Left / Middle */}
          <Bubble
            metric={hygiene}
            size="sm"
            className="left-13.75 top-0"
            textClassName="pb-1"
            zIndex={20}
          />
          {/* Food Taste - Large Right */}
          <Bubble metric={foodTaste} size="lg" className="right-0 top-2.5" />
        </div>
      </div>
    </div>
  );
};
