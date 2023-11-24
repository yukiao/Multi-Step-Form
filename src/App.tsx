import { useState } from "react";
import Form from "./components/Form";
import Navigation from "./components/Navigation";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <>
      <div className="bg-MAGNOLIA w-screen max-w-full min-h-screen flex justify-center md:items-center">
        <div className="md:w-2/3 bg-WHITE shadow-sm rounded-xl md:p-3 pr-0 flex flex-col md:flex-row">
          <div>
            <Navigation activeStep={activeStep} />
          </div>
          <div className="flex-1 flex justify-center bg-MAGNOLIA md:bg-WHITE pb-4 md:pb-0">
            <div className="self-start md:self-auto relative w-10/12 md:w-9/12 flex flex-col space-y-10 bg-WHITE py-8 pb-8 md:pb-0 p-4 rounded-md -mt-20 md:mt-0">
              <div className="md:mt-0 flex flex-col space-y-1">
                <h1 className="font-bold text-BLUE text-[28px] md:text-[32px]">
                  Personal Info
                </h1>
                <p className="text-COOL_GRAY">
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div className="flex-1">
                {/** Main content start */}

                {activeStep === 1 && (
                  <Form handleSubmit={() => setActiveStep(2)} />
                )}
                {/** Main content end */}
              </div>

              <div className="hidden md:block">
                <div className="flex mb-5">
                  <button
                    type="submit"
                    form="first-form"
                    className="ml-auto bg-BLUE text-WHITE py-2 px-4 rounded-md active:bg-PASTEL_BLUE"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex items-center">
              <div className="w-10/12 mx-auto flex py-4">
                <button
                  type="submit"
                  form="first-form"
                  className="ml-auto bg-BLUE text-WHITE py-2 px-4 rounded-md active:bg-PASTEL_BLUE"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
