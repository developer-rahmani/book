import Button from "@/libs/design/Button/Button";
import Input from "@/libs/design/Input/Input";
import { useCreateQueryStrings } from "@/libs/hook/useCreateQueryStrings";
import SearchIcon from "@assets/home/search.svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const HomeSearchInput = () => {
  const t = useTranslations("home");
  const createParams = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createParams({
      pathname,
      router,
      params: [{ name: "search", value: search }],
    });
  };

  return (
    <form className="mx-auto w-full max-w-[600px]" onSubmit={onSubmit}>
      <Input
        className="h-12"
        placeholder={t("search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        leftSection={
          <Button type="submit">
            <SearchIcon />
          </Button>
        }
      />
    </form>
  );
};

export default HomeSearchInput;