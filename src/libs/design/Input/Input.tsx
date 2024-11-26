import { cn } from "@/libs/config/cn/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  rightSection?: JSX.Element;
}

const Input = ({ label, className, rightSection, error, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-dark-100">{label}</label>
      <div className="relative">
        <input
          className={cn(
            "h-10 w-full rounded-xl border px-2 text-sm",
            className,
          )}
          {...rest}
        />
        {rightSection}
      </div>
      {error && (
        <p className="text-sm font-medium text-semantic-red-100">{error}</p>
      )}
    </div>
  );
};

export default Input;
