interface StepIndicatorProps {
  order: number;
  active?: boolean;
  title: string;
}
const StepIndicator = ({
  order,
  active = false,
  title,
}: StepIndicatorProps) => {
  return (
    <div className="flex flex-row items-center space-x-3">
      <div
        className={`${
          active ? "bg-PASTEL_BLUE" : "border border-WHITE"
        } rounded-full w-8 h-8 flex justify-center items-center`}
      >
        <span className={`${active ? "text-BLUE" : "text-WHITE "}font-medium`}>
          {order}
        </span>
      </div>
      <div className="hidden md:flex flex-col space-y-0">
        <span className="text-[12px] text-LIGHT_GRAY">STEP {order}</span>
        <span className="text-WHITE font-bold uppercase">{title}</span>
      </div>
    </div>
  );
};

export default StepIndicator;
