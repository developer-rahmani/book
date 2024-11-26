"use client";

import type { AuthSchema } from "@/libs/domain/auth";
import type { SignInResponse } from "next-auth/react";

import { authSchema } from "@/libs/domain/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import AuthActions from "./AuthActions";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";

const Auth = () => {
  const t = useTranslations();
  const methods = useForm<AuthSchema>({
    defaultValues: {
      password: "",
      username: "",
    },
    resolver: zodResolver(authSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit((dto) => {
    signIn("credentials", {
      redirect: false,
      username: dto.username,
      password: dto.password.trim(),
    })
      .then((data: SignInResponse | undefined) => {
        if (data?.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex w-full max-w-[500px] flex-col gap-6 rounded-xl bg-white p-6"
        onSubmit={onSubmit}
      >
        <UsernameInput
          control={control}
          // @ts-ignore - I am unable to translate text outside of a component
          error={errors.username?.message ? t(errors.username.message) : ""}
          name="username"
        />
        <PasswordInput
          control={control}
          // @ts-ignore - I am unable to translate text outside of a component
          error={errors.password?.message ? t(errors.password.message) : ""}
          name="password"
        />
        <AuthActions />
      </form>
    </div>
  );
};

export default Auth;
