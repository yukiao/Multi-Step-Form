import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

export type PricingPlan = {
  iconSrc: string;
  price: number;
  name: string;
};
export const pricingPlans: PricingPlan[] = [
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
