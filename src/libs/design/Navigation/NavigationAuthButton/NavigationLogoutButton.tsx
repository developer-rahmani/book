"use client";

import ArrowDown from "@assets/navigation/arrowDown.svg";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import Button from "../../Button/Button";

interface Props {
  name: string;
}

const NavigationLogoutButton = ({ name }: Props) => {
  const t = useTranslations("shared.navigation.auth");
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const onClose = () => setIsOpenDropdown(false);

  useEffect(() => {
    window.addEventListener("click", onClose);

    return () => {
      window.removeEventListener("click", onClose);
    };
  }, []);

  return (
    <div className="relative">
      <Button
        className="flex h-12 w-full items-center gap-2 rounded-xl border bg-primary-200 px-4 text-sm"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenDropdown((prevState) => !prevState);
        }}
      >
        {name}

        <ArrowDown />
      </Button>

      {isOpenDropdown && (
        <div className="absolute inset-x-0 top-[calc(100%+4px)] rounded-xl bg-primary-200 px-4 text-sm">
          <Button
            className="size-0 h-10 w-full border-none py-2 text-right"
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          >
            {t("logout")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavigationLogoutButton;
