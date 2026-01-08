import type { RatingMetric } from "../../types";

interface RatingChartProps {
  metrics: RatingMetric[];
  title: string;
  description: string;
}

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

  const hexToRgba = (hex: string, alpha: number) => {
    const normalized = hex.replace("#", "").trim();
    if (normalized.length !== 6) return `rgba(0,0,0,${alpha})`;
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const Bubble = ({
    metric,
    size,
    className,
    textClassName,
  }: {
    metric: RatingMetric;
    size: "sm" | "lg";
    className: string;
    textClassName?: string;
  }) => {
    const isLarge = size === "lg";
    const ring1 = isLarge ? 6 : 5; // full white separator ring
    const outerInset = isLarge ? 14 : 12; // how far the arc sits outside
    const arcThickness = isLarge ? 7 : 6;
    const arcColor = hexToRgba(metric.color, 0.45);

    return (
      <div
        className={`absolute rounded-full flex items-center justify-center text-center select-none ${
          isLarge ? "w-44 h-44" : "w-28 h-28"
        } ${className}`}
        style={{
          backgroundColor: metric.color,
          boxShadow: `0 14px 28px rgba(15,23,42,0.10), 0 0 0 ${ring1}px #ffffff`,
        }}
      >
        {/* Partial arc ring (not a full circle) */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            inset: -outerInset,
            background: `conic-gradient(from -80deg, ${arcColor} 0 300deg, transparent 300deg 360deg)`,
            WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${arcThickness}px), #000 calc(100% - ${arcThickness}px))`,
            mask: `radial-gradient(farthest-side, transparent calc(100% - ${arcThickness}px), #000 calc(100% - ${arcThickness}px))`,
            opacity: 1,
          }}
        />

        <div className={`relative ${(textClassName ?? "").trim()}`.trim()}>
          <p
            className={`${
              isLarge ? "text-4xl" : "text-2xl"
            } font-bold text-white leading-none`}
          >
            {metric.value}%
          </p>
          <p
            className={`${
              isLarge ? "text-xs" : "text-[11px]"
            } font-medium text-white/90 mt-1.5`}
          >
            {metric.label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>

      {/* Bubble cluster (matches design) */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm h-60">
          <Bubble metric={hygiene} size="sm" className="left-8 top-4" />
          <Bubble metric={packaging} size="sm" className="left-4 bottom-5" />
          <Bubble metric={foodTaste} size="lg" className="right-6 top-8" />
        </div>
      </div>
    </div>
  );
};
