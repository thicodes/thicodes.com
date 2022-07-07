import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  className?: string;
  color?: "primary" | "secondary";
  href?: string;
};
const Button = (props: ButtonProps) => {
  const {
    href,
    color = "primary",
    variant = "contained",
    className,
    ...rest
  } = props;
  const Component = href ? ButtonLink : ButtonBase;
  return (
    <Component
      className={clsx(
        "transition-borders rounded-full px-4 py-4 text-indigo-100 transition-colors duration-150",
        {
          "bg-primary": color === "primary" && variant === "contained",
          "bg-secondary": color === "secondary" && variant === "contained",
          "border-primary": color === "primary" && variant === "outlined",
          "border-secondary": color === "secondary" && variant === "outlined",
        },
        className
      )}
      {...rest}
    />
  );
};

const ButtonBase = (props: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return <button {...props} />;
};

const ButtonLink = (props: ButtonProps & JSX.IntrinsicElements["a"]) => {
  const { href, ...rest } = props;
  return <a href={href} {...rest} />;
};

export default Button;
