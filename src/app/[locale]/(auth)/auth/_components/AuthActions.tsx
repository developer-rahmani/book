import { Link } from "@/i18n/routing";
import Button from "@/libs/design/Button/Button";
import { useTranslations } from "next-intl";
import React from "react";

const AuthActions = () => {
  const t = useTranslations("auth.action");
  return (
    <div className="grid grid-cols-2">
      <Link
        className="flex h-12 w-full items-center justify-center text-purple-100"
        href="/"
      >
        {t("cancel")}
      </Link>
      <Button
        className="h-12 w-full rounded-xl bg-purple-100 text-white"
        type="submit"
      >
        {t("confirm")}
      </Button>
    </div>
  );
};

export default AuthActions;
