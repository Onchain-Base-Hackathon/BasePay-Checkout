import React, { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import add from "@/app/assets/add.svg";
import cancel from "@/app/assets/cancel.svg";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CreateNewPaymentForm from "./payment-pages/CreateNewPaymentForm";

interface IProps {}

const CreatePaymentLink: FC<IProps> = (props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 py-10 text-base">
      <p className="text-center font-medium">
        Click the button below to create a <br />
        new payment link and start receiving <br />
        payments with base
      </p>

      <AlertDialog>
        <AlertDialogTrigger>
          <span className="flex cursor-pointer items-center justify-center gap-2 text-balance rounded-full bg-blue px-6 py-3 text-base font-medium text-white">
            <Image
              src={add}
              alt="create new"
              className="h-4 w-4"
              width={12}
              height={12}
            />
            Create a new page
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="flex w-full justify-between gap-3">
            <AlertDialogCancel>
              <Image src={cancel} alt="cancel" width={28} height={28} />
            </AlertDialogCancel>
            <AlertDialogHeader className="w-full">
              <AlertDialogTitle>Create new payment page</AlertDialogTitle>
            </AlertDialogHeader>
          </div>
          <CreateNewPaymentForm />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreatePaymentLink;
