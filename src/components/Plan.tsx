import PlanCard from "./PlanCard";
import { forwardRef } from "react";
import Switch from "./Switch";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateIsYearySubscription } from "../features/plan/plan.slice";
import { pricingPlans } from "../data/pricing-plan.data";

interface PlanProps {
  handleSubmit: (values: { value: number }) => void;
}

const planSchema = z.object({
  value: z.number().refine((val) => val >= 0 && val <= 2, {
    message: "Please select the plan",
  }),
});

const Plan = forwardRef<HTMLFormElement, PlanProps>(({ handleSubmit }, ref) => {
  const activeIndex = useAppSelector((state) => state.plan.selectedPlan);
  const isYearly = useAppSelector((state) => state.plan.yearlySubscription);
  const dispatch = useAppDispatch();

  const {
    setValue,
    formState: { errors },
    handleSubmit: onSubmit,
    watch,
  } = useForm<{ value: number }>({
    defaultValues: {
      value: activeIndex,
    },

    resolver: zodResolver(planSchema),
  });

  return (
    <form ref={ref} onSubmit={onSubmit(handleSubmit)} className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricingPlans.map((plan, index) => (
          <PlanCard
            key={index}
            iconSrc={plan.iconSrc}
            price={plan.price}
            name={plan.name}
            active={watch().value === index}
            onClick={() => {
              setValue("value", index);
            }}
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
          onChecked={(e) =>
            dispatch(updateIsYearySubscription(e.target.checked))
          }
        />
        <span
          className={`text-sm font-medium ${
            isYearly ? "text-BLUE" : "text-LIGHT_GRAY"
          }`}
        >
          Yearly
        </span>
      </div>
      <p className="mt-5 overflow-x-hidden whitespace-nowrap text-ellipsis text-STRAWBERRY_RED font-bold text-sm">
        {errors.value?.message}
      </p>
    </form>
  );
});

export default Plan;
