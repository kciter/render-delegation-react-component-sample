import React from "react";
import { Slottable, SlottableProps } from "./Slottable";

function isSlottable(
  child: React.ReactNode
): child is React.ReactElement<SlottableProps> {
  return React.isValidElement(child) && child.type === Slottable;
}

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Slot = ({ children, ...props }: SlotProps) => {
  const childrenArray = React.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child !== slottable) return child;

      if (React.isValidElement(newElement)) {
        return newElement.props.children;
      } else {
        console.warn(
          "Slot component should have only one React element as a child"
        );
      }

      return null;
    });

    return React.isValidElement(newElement)
      ? React.cloneElement(
          newElement,
          {
            ...props,
            ...newElement.props,
          },
          newChildren
        )
      : null;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
    });
  }

  console.warn("Slot component should have only one React element as a child");

  return null;
};

export type AsChildProps<T> = T & {
  asChild?: boolean;
};
