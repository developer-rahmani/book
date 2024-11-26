import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const NavigationLoginButton = () => {
  const t = useTranslations("shared.navigation.auth");
  return (
    <Link
      className="rounded-xl bg-primary-200 p-4 text-sm font-medium text-neutral-dark-100"
      href="/auth"
    >
      {t("login")}
    </Link>
  );
};

export default NavigationLoginButton;
