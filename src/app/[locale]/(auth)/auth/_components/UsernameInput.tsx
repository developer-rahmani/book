import type { Control, FieldValues, Path } from "react-hook-form";

import Input from "@/libs/design/Input/Input";
import { useTranslations } from "next-intl";
import React from "react";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error: string | undefined;
}

const UsernameInput = <T extends FieldValues>({
  control,
  error,
  name,
}: Props<T>) => {
  const t = useTranslations("auth");

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Input
          className="ltr text-left"
          error={error}
          label={t("username.label")}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    />
  );
};

export default UsernameInput;
