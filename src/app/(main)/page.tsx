import { getTranslations } from "next-intl/server";
import React from "react";

import Home from "./_components/Home";

export async function generateMetadata() {
  const t = await getTranslations("home");

  return {
    title: t("title"),
  };
}

const Page = () => {
  return <Home />;
};

export default Page;
