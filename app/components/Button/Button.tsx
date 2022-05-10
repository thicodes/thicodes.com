import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary";
  href?: string;
};
const Button = (props: ButtonProps) => {
  const { href, variant, className } = props;
  const Component = href ? ButtonLink : ButtonBase;
  return (
    <Component
      className={clsx(
        "rounded-full px-4 py-4 text-indigo-100 transition-colors duration-150 hover:bg-orange-800",
        {
          "bg-orange-600": variant === "primary",
        }
      )}
      {...props}
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
