import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

interface Routes {
  label: string;
  to: string;
}

const NavigationRoutes = () => {
  const t = useTranslations("shared.navigation");

  const navigationRouteItems: Routes[] = [
    {
      label: t("home"),
      to: "/",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {navigationRouteItems.map((item) => (
        <Link
          className="text-sm font-medium text-neutral-dark-100"
          href={item.to}
          key={item.to}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationRoutes;
