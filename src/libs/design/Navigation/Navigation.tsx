import React from "react";

import NavigationAuthButton from "./NavigationAuthButton/NavigationAuthButton";
import NavigationRoutes from "./NavigationRoutes";

const Navigation = () => {
  return (
    <header className="flex justify-between gap-2">
      <NavigationRoutes />
      <NavigationAuthButton />
    </header>
  );
};

export default Navigation;
