import "./index.scss";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export const Box = ({ className, children, ...props }: BoxProps) => {
  return (
    <div className={`Box ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Box;
