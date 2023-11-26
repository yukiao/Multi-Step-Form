import { PropsWithChildren } from "react";
import { addons } from "../data/add-ons.data";
import { pricingPlans } from "../data/pricing-plan.data";
import { useAppSelector } from "../hooks";

interface SummaryProps {
  onChangeClick: () => void;
}

const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[1fr_100px] items-center gap-y-5">
      {children}
    </div>
  );
};

const Summary = ({ onChangeClick }: SummaryProps) => {
  const plan = useAppSelector((state) => state.plan.selectedPlan);
  const isYearlySubscription = useAppSelector(
    (state) => state.plan.yearlySubscription,
  );
  const selectedAddons = useAppSelector((state) => state.addOn.value);

  const selectedPricingPlan = pricingPlans[plan];

  const getTotalPrice = (): number => {
    const planPrice = isYearlySubscription
      ? pricingPlans[plan].price * 10
      : pricingPlans[plan].price;

    const addonsPrice = selectedAddons.reduce((acc, curr) => {
      const currentAddonPrice =
        addons.find((addon) => addon.key === curr)?.price || 0;
      return (
        acc +
        (isYearlySubscription ? currentAddonPrice * 10 : currentAddonPrice)
      );
    }, 0);
    return planPrice + addonsPrice;
  };

  return (
    <div className="flex flex-col">
      <div className="bg-MAGNOLIA p-5 rounded-md">
        <Grid>
          <div className="flex flex-col border-b border-LIGHT_GRAY pb-5">
            <span className="font-medium text-BLUE">{`${
              selectedPricingPlan.name
            } (${isYearlySubscription ? "Yearly" : "Monthly"})`}</span>
            <span
              className="text-sm text-COOL_GRAY underline cursor-pointer hover:text-PURPLISH_BLUE"
              onClick={onChangeClick}
            >
              Change
            </span>
          </div>
          <div className="border-b border-LIGHT_GRAY h-full flex items-center justify-end pb-5">
            <p className="text-right text-sm font-medium text-BLUE">{`$${
              isYearlySubscription
                ? selectedPricingPlan.price * 10
                : selectedPricingPlan.price
            }/${isYearlySubscription ? "yr" : "mo"}`}</p>
          </div>
          {selectedAddons.map((selectedAddon) => {
            const currentAddOn = addons.find(
              (addon) => addon.key === selectedAddon,
            );
            return (
              <>
                <span className="text-sm text-COOL_GRAY">
                  {currentAddOn?.title}
                </span>
                <p className="text-right text-sm text-BLUE">{`+$${
                  isYearlySubscription
                    ? (currentAddOn?.price || 0) * 10
                    : currentAddOn?.price || 0
                }/${isYearlySubscription ? "yr" : "mo"}`}</p>
              </>
            );
          })}
        </Grid>
      </div>

      <div className="p-5">
        <Grid>
          <span className="text-sm text-COOL_GRAY">
            Total (per {isYearlySubscription ? "year" : "month"})
          </span>
          <p className="text-right text-PURPLISH_BLUE font-bold text-[18px]">
            +${getTotalPrice()}/{isYearlySubscription ? "yr" : "mo"}
          </p>
        </Grid>
      </div>
    </div>
  );
};

export default Summary;
