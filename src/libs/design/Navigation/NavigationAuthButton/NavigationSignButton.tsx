import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const NavigationSignButton = () => {
  const t = useTranslations("shared.navigation.auth");
  return (
    <Link
      className="flex h-12 items-center rounded-xl bg-primary-200 px-4 text-sm font-medium text-neutral-dark-100"
      href="/auth"
    >
      {t("sign")}
    </Link>
  );
};

export default NavigationSignButton;
