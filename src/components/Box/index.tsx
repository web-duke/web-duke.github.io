import "./index.scss";

type BoxProps = React.ButtonHTMLAttributes<HTMLDivElement>;

export const Box = ({ children, ...props }: BoxProps) => {
  return (
    <div className="Box" {...props}>
      {children}
    </div>
  );
};

export default Box;
