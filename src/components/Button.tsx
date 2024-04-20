import React from "react";
import { AsChildProps, Slot } from "./Slot";
import { Slottable } from "./Slottable";

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export type ButtonProps = AsChildProps<Props>;

type ButtonElement = React.ElementRef<"button">;

export const Button = React.forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, icon } = props;
  const Element = asChild ? Slot : "button";
  return (
    <Element
      ref={ref}
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
});
