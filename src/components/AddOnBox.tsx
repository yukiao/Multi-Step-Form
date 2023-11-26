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
          className="relative peer appearance-none w-4 h-4 border border-LIGHT_GRAY rounded-sm bg-white shrink-0 checked:bg-PURPLISH_BLUE checked:border-0 ring-0 outline-0"
        />
        <svg
          className="absolute hidden peer-checked:block ml-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
        >
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="m1 4 3.433 3.433L10.866 1"
          />
        </svg>
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
