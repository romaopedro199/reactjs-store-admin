import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "@/schemas/sign-in-schema";
import { SignInCredentials } from "@/types/auth.types";

type SignInFormInputs = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const signIn = (values: SignInCredentials) => {
    console.log(values);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  return {
    handleSubmit,
    control,
    signIn,
    errors,
  };
};

export default useSignIn;
