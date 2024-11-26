import { prefetchBooksQuery } from "@/libs/dataLayer/query/useBooksQuery";
import { getTranslations } from "next-intl/server";
import React from "react";

import Home from "./_components/Home";

export async function generateMetadata() {
  const t = await getTranslations("home");

  return {
    title: t("title"),
  };
}

async function fetchData() {
  return prefetchBooksQuery();
}

const Page = async () => {
  const data = await fetchData();

  return <Home fallbackData={data} />;
};

export default Page;
