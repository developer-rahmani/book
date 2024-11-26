import { cn } from "@/libs/config/cn/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightSection?: JSX.Element;
  leftSection?: JSX.Element;
}

const Input = ({
  label,
  className,
  rightSection,
  leftSection,
  error,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-dark-100">{label}</label>
      <div className="relative flex items-center rounded-xl border bg-white">
        {rightSection && (
          <div className="flex items-center justify-center px-3">
            {rightSection}
          </div>
        )}
        <input
          className={cn("h-10 w-full rounded-xl px-3 text-sm", className)}
          {...rest}
        />
        {leftSection && (
          <div className="flex items-center justify-center px-3">
            {leftSection}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm font-medium text-semantic-red-100">{error}</p>
      )}
    </div>
  );
};

export default Input;
