import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/authOptions";
import React from "react";

import NavigationLogoutButton from "./NavigationLogoutButton";
import NavigationSignButton from "./NavigationSignButton";

const NavigationAuthButton = async () => {
  const data = await getServerAuthSession();

  return data?.isLogged ? (
    <NavigationLogoutButton name={String(data.user?.name)} />
  ) : (
    <NavigationSignButton />
  );
};

export default NavigationAuthButton;
