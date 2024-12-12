"use server";

import { PropsWithChildren } from "react";

import CommonHeader from "@/widgets/header/ui/common-header";
import CommonFooter from "@/widgets/footer/ui/common-footer";
import SideBar from "@/widgets/side-bar/ui/side-bar";

async function CustomLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CommonHeader />
      <div className="flex-grow container mx-auto px-4 py-8 flex">
        <SideBar />

        <main className="flex-grow">{children}</main>
      </div>
      <CommonFooter />
    </div>
  );
}

export default CustomLayout;
