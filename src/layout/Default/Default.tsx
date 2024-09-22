import Head from "next/head";
import { Roboto_Flex } from "next/font/google";

import { ReactNode } from "react";
import Header from "@/components/Header";
// import { SideBar } from "@/components/SideBar";

interface IProps {
  children: ReactNode;
}

const roboto = Roboto_Flex({ subsets: ["latin"] });

const Default = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>arthus.dev</title>
      </Head>

      <Header />

      {/* <SideBar /> */}

      <main
        className={`${roboto.className} flex flex-col justify-start gap-0 pl-44`}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Default;
