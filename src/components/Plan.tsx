import PlanCard from "./PlanCard";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import { useState } from "react";
import Switch from "./Switch";

type PricingPlan = {
  iconSrc: string;
  price: number;
  name: string;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Arcade",
    iconSrc: ArcadeIcon,
    price: 9,
  },
  {
    name: "Advanced",
    iconSrc: AdvancedIcon,
    price: 12,
  },
  {
    name: "Pro",
    iconSrc: ProIcon,
    price: 15,
  },
];

const Plan = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricingPlans.map((plan, index) => (
          <PlanCard
            iconSrc={plan.iconSrc}
            price={plan.price}
            name={plan.name}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            yearly={isYearly}
          />
        ))}
      </div>

      <div className="bg-MAGNOLIA mt-8 p-3 flex justify-center items-center space-x-5 rounded-md">
        <span
          className={`text-sm font-medium ${
            !isYearly ? "text-BLUE" : "text-LIGHT_GRAY"
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onChecked={(e) => setIsYearly(e.target.checked)}
        />
        <span
          className={`text-sm font-medium ${
            isYearly ? "text-BLUE" : "text-LIGHT_GRAY"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Plan;
