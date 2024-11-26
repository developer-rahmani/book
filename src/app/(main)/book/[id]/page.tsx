import { prefetchBookQuery } from "@/libs/dataLayer/query/useBookQuery";
import { getTranslations } from "next-intl/server";
import React from "react";

import SingleBook from "./_components/SingleBook";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations("book");
  const data = await prefetchBookQuery(params.id);

  return {
    title: t("title", { title: data.title }),
  };
}

async function fetchData(id: string) {
  return prefetchBookQuery(id);
}

const Page = async ({ params }: PageProps) => {
  const data = await fetchData(params.id);

  return <SingleBook fallbackData={data} id={params.id} />;
};

export default Page;
