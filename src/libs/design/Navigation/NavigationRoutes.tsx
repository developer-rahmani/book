import Link from "next/link";
import React from "react";

import { navigationRouteItems } from "./navigationRouteItems";

const NavigationRoutes = () => {
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
