import type { ReactNode } from "react";

import { cn } from "@/libs/config/cn/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, type, ...rest }: Props) => {
  return (
    <button
      className={cn("hover:opacity-[0.8]", className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
