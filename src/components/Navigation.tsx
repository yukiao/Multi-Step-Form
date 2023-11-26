import DesktopSidebar from "../assets/images/bg-sidebar-desktop.svg";
import MobileSidebar from "../assets/images/bg-sidebar-mobile.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
import StepIndicator from "./StepIndicator";
import { steps } from "../utils/steps";

interface NavigationProps {
  activeStep: number;
}

const Navigation = ({ activeStep }: NavigationProps) => {
  const smSize = useMediaQuery("(max-width: 768px)");

  if (smSize) {
    return (
      <div className="relative w-screen max-w-full">
        <img
          src={MobileSidebar}
          width={375}
          height={172}
          className="h-auto w-full"
        />
        <div className="absolute top-0 pt-8 flex justify-center w-full space-x-4">
          {steps.map((step, index) => (
            <StepIndicator
              key={index}
              order={index + 1}
              name={step.name}
              active={activeStep === index + 1}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full">
      <img
        src={DesktopSidebar}
        width={274}
        height={568}
        className="h-full object-cover"
      />
      <div className="absolute top-0 p-5 pt-10 flex flex-col space-y-8">
        {steps.map((step, index) => (
          <StepIndicator
            key={index}
            order={index + 1}
            name={step.name}
            active={activeStep === index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
