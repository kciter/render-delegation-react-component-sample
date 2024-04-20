import React from "react";
import { Slottable, SlottableProps } from "./Slottable";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Slot = React.forwardRef<any, SlotProps>((props, ref) => {
  const { children, ...slotProps } = props;
  const childrenArray = React.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child !== slottable) return child;

      if (React.isValidElement(newElement)) {
        return newElement.props.children;
      } else {
        console.warn("Slot component should have only one React element as a child");
      }

      return null;
    });

    return React.isValidElement(newElement)
      ? React.cloneElement(
          newElement,
          {
            ...slotProps,
            ...newElement.props,
            ref: ref ? composeRefs(ref, (newElement as any).ref) : (newElement as any).ref,
          },
          newChildren
        )
      : null;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref: ref ? composeRefs(ref, (children as any).ref) : (children as any).ref,
    });
  }

  console.warn("Slot component should have only one React element as a child");

  return null;
});

export type AsChildProps<T> = T & {
  asChild?: boolean;
};

function isSlottable(child: React.ReactNode): child is React.ReactElement<SlottableProps> {
  return React.isValidElement(child) && child.type === Slottable;
}

type PossibleRef<T> = React.Ref<T> | undefined;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}
