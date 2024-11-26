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

async function fetchData(search: string) {
  return prefetchBooksQuery(search);
}

interface PageProps {
  searchParams: {
    search: string;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const data = await fetchData(searchParams.search);

  return <Home fallbackData={data} />;
};

export default Page;
