import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useAppSelector } from "../hooks";

const bioSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("This field is required"),
  phone: z.string().min(1, "This field is required"),
});

type Bio = z.infer<typeof bioSchema>;

interface FormProps extends ComponentPropsWithoutRef<"form"> {
  handleSubmit: (values: Bio) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ handleSubmit, ...props }, ref) => {
    const personalInfo = useAppSelector((state) => state.personalInfo);

    const {
      register,
      handleSubmit: onSubmit,
      formState: { errors },
    } = useForm<Bio>({
      defaultValues: {
        name: personalInfo.name,
        email: personalInfo.email,
        phone: personalInfo.phone,
      },
      resolver: zodResolver(bioSchema),
    });

    return (
      <form
        ref={ref}
        onSubmit={onSubmit(handleSubmit)}
        className="flex flex-col space-y-5"
        {...props}
      >
        <TextInput
          label="Name"
          placeholder="e.g. Stephen King"
          error={errors.name?.message}
          {...register("name")}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextInput
          label="Phone Number"
          type="tel"
          placeholder="e.g. +62"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </form>
    );
  },
);

export default Form;
