import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/authOptions";
import React from "react";

import NavigationLoginButton from "./NavigationLoginButton";
import NavigationLogoutButton from "./NavigationLogoutButton";

const NavigationAuthButton = async () => {
  const data = await getServerAuthSession();

  return data?.isLogged ? (
    <NavigationLogoutButton name={String(data.user?.name)} />
  ) : (
    <NavigationLoginButton />
  );
};

export default NavigationAuthButton;
