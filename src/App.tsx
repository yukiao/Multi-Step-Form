import { useRef, useState } from "react";

import Form from "./components/Form";
import Navigation from "./components/Navigation";
import { steps } from "./utils/steps";
import ActionButtons from "./components/ActionButton";
import Plan from "./components/Plan";
import { useAppDispatch } from "./hooks";
import { setPersonalInfo } from "./features/personalInfo/personalInfo.slice";
import { updatePlan } from "./features/plan/plan.slice";
import ThankYouIcon from "./assets/images/icon-thank-you.svg";
import PickAddons from "./components/PickAddons";
import Summary from "./components/Summary";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [allStepCompleted, setAllStepCompleted] = useState<boolean>(false);

  const personalInfoRef = useRef<HTMLFormElement>(null);
  const selectPlanRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bg-MAGNOLIA w-screen max-w-full min-h-screen flex justify-center md:items-center">
        <div className="md:w-5/6 lg:w-2/3 bg-WHITE shadow-sm rounded-xl md:p-3 pr-0 flex flex-col md:flex-row">
          <div>
            <Navigation activeStep={activeStep} />
          </div>
          <div className="flex-1 flex justify-center bg-MAGNOLIA md:bg-WHITE pb-4 md:pb-0">
            <div className="self-start md:self-auto relative w-10/12 md:w-9/12 flex flex-col space-y-10 bg-WHITE shadow-sm py-8 pb-8 md:pb-0 p-4 rounded-md -mt-20 md:mt-0">
              {!allStepCompleted ? (
                <>
                  <div className="md:mt-0 flex flex-col space-y-1">
                    <h1 className="font-bold text-BLUE text-[28px] md:text-[32px]">
                      <span>{`${steps[activeStep - 1].title}`}</span>
                    </h1>
                    <p className="text-COOL_GRAY">
                      <span>{`${steps[activeStep - 1].description}`}</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    {/** Main content start */}

                    {activeStep === 1 && (
                      <Form
                        ref={personalInfoRef}
                        handleSubmit={(values) => {
                          setActiveStep(2);
                          dispatch(setPersonalInfo(values));
                        }}
                      />
                    )}

                    {activeStep === 2 && (
                      <Plan
                        ref={selectPlanRef}
                        handleSubmit={(val) => {
                          setActiveStep(3);
                          dispatch(updatePlan(val.value));
                        }}
                      />
                    )}
                    {activeStep === 3 && <PickAddons />}
                    {activeStep === 4 && (
                      <Summary onChangeClick={() => setActiveStep(2)} />
                    )}
                    {/** Main content end */}
                  </div>

                  <div className="hidden md:block">
                    <div className="flex mb-5">
                      <ActionButtons
                        nextButtonTitle={
                          activeStep !== 4 ? "Next Step" : "Confirm"
                        }
                        onBackClick={() => setActiveStep((prev) => prev - 1)}
                        showBackButton={activeStep !== 1}
                        onNextClick={() => {
                          switch (activeStep) {
                            case 1:
                              personalInfoRef.current?.dispatchEvent(
                                new Event("submit", {
                                  cancelable: true,
                                  bubbles: true,
                                }),
                              );
                              break;
                            case 2:
                              selectPlanRef.current?.dispatchEvent(
                                new Event("submit", {
                                  cancelable: true,
                                  bubbles: true,
                                }),
                              );
                              break;

                            case 3:
                              setActiveStep(4);
                              break;
                            case 4:
                              setAllStepCompleted(true);
                              break;
                          }
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-5 md:-mt-8 flex flex-col items-center justify-center h-full space-y-5">
                  <img
                    src={ThankYouIcon}
                    width={80}
                    height={80}
                    alt="thank-you-icon"
                    className="hidden md:block"
                  />
                  <img
                    src={ThankYouIcon}
                    width={60}
                    height={60}
                    alt="thank-you-icon"
                    className="md:hidden"
                  />
                  <h1 className="font-bold text-BLUE text-[32px]">
                    Thank you!
                  </h1>
                  <p className="text-center text-COOL_GRAY">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com
                  </p>
                </div>
              )}
            </div>
          </div>
          {!allStepCompleted && (
            <div className="md:hidden">
              <div className="flex items-center">
                <div className="w-10/12 mx-auto flex py-4">
                  <ActionButtons
                    nextButtonTitle={activeStep !== 4 ? "Next Step" : "Confirm"}
                    onBackClick={() => setActiveStep((prev) => prev - 1)}
                    showBackButton={activeStep !== 1}
                    onNextClick={() => {
                      switch (activeStep) {
                        case 1:
                          personalInfoRef.current?.dispatchEvent(
                            new Event("submit", {
                              cancelable: true,
                              bubbles: true,
                            }),
                          );
                          break;
                        case 2:
                          selectPlanRef.current?.dispatchEvent(
                            new Event("submit", {
                              cancelable: true,
                              bubbles: true,
                            }),
                          );
                          break;
                        case 3:
                          setActiveStep(4);
                          break;
                        case 4:
                          setAllStepCompleted(true);
                          break;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
