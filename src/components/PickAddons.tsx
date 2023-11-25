import { addons } from "../data/add-ons.data";
import { updateAddons } from "../features/addons/addons.slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import AddOnBox from "./AddOnBox";

const PickAddons = () => {
  const selectedAddOns = useAppSelector((state) => state.addOn.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col space-y-3">
      {addons.map((addon) => (
        <AddOnBox
          itemKey={addon.key}
          selected={selectedAddOns.includes(addon.key)}
          title={addon.title}
          description={addon.description}
          price={addon.price}
          checked={selectedAddOns.includes(addon.key)}
          onChange={() => {
            const isChecked = selectedAddOns.includes(addon.key);

            if (isChecked) {
              dispatch(
                updateAddons(
                  selectedAddOns.filter((addOn) => addOn !== addon.key),
                ),
              );
            } else {
              dispatch(updateAddons([...selectedAddOns, addon.key]));
            }
          }}
        />
      ))}
    </div>
  );
};

export default PickAddons;
