import CreatePaymentLink from "@/components/CreatePaymentLink";
import Header from "@/components/Header";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
