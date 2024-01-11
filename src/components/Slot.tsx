import React from "react";

export const Slot = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
}) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
    });
  }
  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }
  return null;
};
