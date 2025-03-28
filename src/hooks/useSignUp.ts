import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "@/schemas/sign-up-schema";
import { SignUpCredentials } from "@/types/auth.types";

type SignUpFormInputs = z.infer<typeof signUpSchema>;

const useSignUp = () => {
  const signUp = (values: SignUpCredentials) => {
    console.log(values);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  return {
    handleSubmit,
    control,
    signUp,
    errors,
  };
};

export default useSignUp;
