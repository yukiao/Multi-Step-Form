import { useAppSelector } from "../hooks";

interface AddOnBoxProps {
  itemKey: string;
  title: string;
  description: string;
  price: number;
  checked: boolean;
  selected: boolean;
  onChange: () => void;
}

const AddOnBox = ({
  itemKey,
  title,
  description,
  price,
  onChange,
  selected,
  checked,
}: AddOnBoxProps) => {
  const yearlySubscription = useAppSelector(
    (state) => state.plan.yearlySubscription,
  );
  return (
    <div
      className={`border ${
        selected ? "border-BLUE bg-MAGNOLIA" : "border-LIGHT_GRAY"
      } rounded-md py-3 px-4`}
    >
      <label key={itemKey} className={` flex items-center`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-5 h-5 accent-PURPLISH_BLUE ring-0"
        />
        <div className="flex flex-col space-y-0 ml-4">
          <span className="text-sm text-BLUE font-medium">{title}</span>
          <span className="text-sm text-COOL_GRAY">{description}</span>
        </div>
        <div className="ml-auto">
          <span className="text-PURPLISH_BLUE text-sm">{`+$${
            yearlySubscription ? price * 10 : price
          }/${yearlySubscription ? "yr" : "mo"}`}</span>
        </div>
      </label>
    </div>
  );
};

export default AddOnBox;
