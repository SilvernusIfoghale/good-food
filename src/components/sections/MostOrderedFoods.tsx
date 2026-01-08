import type { FoodItem } from "../../types";

interface MostOrderedFoodsProps {
  foods: FoodItem[];
}

export const MostOrderedFoods: React.FC<MostOrderedFoodsProps> = ({
  foods,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-gray-900 font-semibold mb-6">Most Ordered Food</h3>

      <div className="space-y-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Food Image */}
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
              {food.image}
            </div>

            {/* Food Info */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{food.name}</p>
              <p className="text-xs text-gray-500">Popular choice</p>
            </div>

            {/* Price */}
            <p className="text-sm font-semibold text-gray-900">
              {formatPrice(food.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
