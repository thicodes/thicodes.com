import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Typography = (props: TypographyProps) => {
  const { as, className, children } = props;
  const Component = as || "p";
  return (
    <Component
      className={clsx(
        "prose-light prose leading-tight dark:prose-dark",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
