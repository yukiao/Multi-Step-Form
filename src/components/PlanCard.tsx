import { createElement } from "react";

interface PlanCardProps {
  iconSrc: string;
  price: number;
  name: string;
  active: boolean;
  yearly: boolean;
  onClick: () => void;
}

const PlanCard = ({
  iconSrc,
  price,
  name,
  active,
  yearly,
  onClick,
}: PlanCardProps) => {
  return (
    <div
      className={`flex md:flex-col border ${
        active ? "border-BLUE bg-MAGNOLIA" : "border-LIGHT_GRAY"
      } hover:border-BLUE rounded-md p-4 space-x-4 md:space-x-0 md:space-y-10`}
      onClick={onClick}
    >
      {createElement("img", {
        src: iconSrc,
        className: "self-start",
        width: 40,
        height: 40,
      })}

      <div className="flex flex-col">
        <span className="text-BLUE font-medium">{name}</span>
        <span className="text-COOL_GRAY text-sm">
          ${`${yearly ? price * 10 : price}`}/{yearly ? "yr" : "mo"}
        </span>
        {yearly && <span className="text-[12px] text-BLUE">2 months free</span>}
      </div>
    </div>
  );
};

export default PlanCard;
