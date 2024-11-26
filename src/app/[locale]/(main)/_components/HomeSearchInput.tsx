import Button from "@/libs/design/Button/Button";
import Input from "@/libs/design/Input/Input";
import { useCreateQueryStrings } from "@/libs/hook/useCreateQueryStrings";
import CloseIcon from "@assets/home/close.svg";
import SearchIcon from "@assets/home/search.svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const HomeSearchInput = () => {
  const t = useTranslations("home");
  const createParams = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createParams({
      pathname,
      router,
      params: [{ name: "search", value: search }],
    });
  };

  const handleClearSearch = () => {
    createParams({
      pathname,
      router,
      params: [{ name: "search", value: "" }],
    });
    setSearch("");
  };

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  return (
    <form className="mx-auto w-full max-w-[600px]" onSubmit={onSubmit}>
      <Input
        className="h-12"
        placeholder={t("search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        leftSection={
          <div className="flex items-center gap-2">
            {search.length ? (
              <Button type="button" onClick={handleClearSearch}>
                <CloseIcon />
              </Button>
            ) : null}
            <Button type="submit">
              <SearchIcon />
            </Button>
          </div>
        }
      />
    </form>
  );
};

export default HomeSearchInput;
