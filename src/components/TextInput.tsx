import { forwardRef, ComponentPropsWithRef } from "react";

interface TextInputProps extends ComponentPropsWithRef<"input"> {
  label?: React.ReactNode;
  error?: React.ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-center space-x-2">
          <div>
            {label && (
              <label className="text-BLUE text-sm shrink-0">{label}</label>
            )}
          </div>
          <p className="overflow-x-hidden whitespace-nowrap text-ellipsis text-STRAWBERRY_RED font-bold text-sm">
            {error}
          </p>
        </div>
        <input
          ref={ref}
          className="border outline-0 border-LIGHT_GRAY rounded-md py-2 px-4 text-BLUE font-medium placeholder-COOL_GRAY cursor-pointer"
          {...props}
        />
      </div>
    );
  },
);

export default TextInput;
