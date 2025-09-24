import { type ReactNode } from "react";

type CardParentProps = {
  children?: ReactNode;
};

export const CardParent = ({ children }: CardParentProps) => (
  <div className="cardholder">{children}</div>
);
