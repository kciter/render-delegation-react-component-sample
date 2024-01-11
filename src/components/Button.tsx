import { Slot } from "./Slot";
import type { AsChildProps } from "./types";

type ButtonProps = AsChildProps<React.ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp {...props} />;
};
