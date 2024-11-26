import type { Control, FieldValues, Path } from "react-hook-form";

import Input from "@/libs/design/Input/Input";
import EyeIcon from "@assets/auth/eye.svg";
import EyeSlashIcon from "@assets/auth/eyeSlash.svg";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error: string | undefined;
}

const PasswordInput = <T extends FieldValues>({
  control,
  error,
  name,
}: Props<T>) => {
  const t = useTranslations("auth");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Input
          className="ltr text-left"
          error={error}
          label={t("password.label")}
          type={isShowPassword ? "password" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rightSection={
            <button
              className="absolute right-3 top-[50%] translate-y-[-50%]"
              type="button"
              onClick={() => setIsShowPassword((prevState) => !prevState)}
            >
              {isShowPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          }
        />
      )}
    />
  );
};

export default PasswordInput;
