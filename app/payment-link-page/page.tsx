import PageDetails from "@/components/PageDetails";
import RecentPayments from "@/components/RecentPayments";
import React, { FC } from "react";

interface IProps {}

const PaymentLinkPage: FC<IProps> = (props) => {
  return (
    <>
      <PageDetails />
      <RecentPayments />
    </>
  );
};

export default PaymentLinkPage;
