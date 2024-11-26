"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import ArrowDown from "@assets/navigation/arrowDown.svg";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

import Button from "../Button/Button";

const NavigationLangSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("shared.navigation.lang");
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLocale(nextLocale: string) {
    startTransition(() => {
      // @ts-expect-error - idk
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  const onClose = () => {
    setIsOpenDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("click", onClose);

    return () => {
      window.removeEventListener("click", onClose);
    };
  }, []);

  return (
    <div className="relative rounded-xl bg-purple-300 text-sm">
      <Button
        className="flex h-12 items-center gap-1 px-4"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpenDropdown((prevState) => !prevState);
        }}
      >
        {locale === "en" ? t("english") : t("persian")}
        <ArrowDown />
      </Button>
      {isOpenDropdown && (
        <div className="fade-animation absolute left-[50%] top-[calc(100%+4px)] flex w-[150px] translate-x-[-50%] flex-col items-start gap-3 rounded-lg bg-white p-4">
          <Button type="button" onClick={() => onChangeLocale("fa")}>
            {t("persian")}
          </Button>
          <Button type="button" onClick={() => onChangeLocale("en")}>
            {t("english")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavigationLangSwitcher;
