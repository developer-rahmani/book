import React from "react";

import NavigationAuthButton from "./NavigationAuthButton/NavigationAuthButton";
import NavigationLangSwitcher from "./NavigationLangSwitcher";
import NavigationRoutes from "./NavigationRoutes";

const Navigation = () => {
  return (
    <header className="z-[1] flex justify-between gap-2">
      <NavigationRoutes />
      <div className="flex items-center gap-2">
        <NavigationLangSwitcher />
        <NavigationAuthButton />
      </div>
    </header>
  );
};

export default Navigation;
