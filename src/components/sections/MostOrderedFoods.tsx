import type { FoodItem } from "../../types";

interface MostOrderedFoodsProps {
  foods: FoodItem[];
}

export const MostOrderedFoods: React.FC<MostOrderedFoodsProps> = ({
  foods,
}) => {
  const formatPrice = (price: number) => {
    return `IDR ${new Intl.NumberFormat("id-ID").format(price)}`;
  };

  return (
    <div className="bg-white rounded-2xl p-8  h-full">
      <div className="mb-8">
        <h3 className="text-[14px] font-normal text-black mb-2">
          Most Ordered Food
        </h3>
        <p className="text-light-gray text-[12px]">
          Adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      <div className="divide-y-[0.5px] divide-divider-line">
        {foods.map((food) => (
          <div
            key={food.id}
            className="flex items-center justify-between py-6 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-4">
              {/* Food Image */}
              <div className="w-7 h-7 rounded-full shadow-lg shadow-gray-400/60">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-[12px] font-normal text-primary-inactive-text">
                  {food.name}
                </p>
              </div>
            </div>

            {/* Price */}
            <p className="text-[12px] font-normal text-light-gray">
              {formatPrice(food.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
