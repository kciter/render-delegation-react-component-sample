import { AsChildProps, Slot } from "./Slot";
import { Slottable } from "./Slottable";

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export type ButtonProps = AsChildProps<Props>;

export const Button = ({ asChild, children, icon, ...props }: ButtonProps) => {
  const Element = asChild ? Slot : "button";
  return (
    <Element
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #000",
        borderRadius: "5px",
        backgroundColor: "transparent",
        fontSize: 12,
      }}
    >
      {icon}
      <Slottable>{children}</Slottable>
    </Element>
  );
};
