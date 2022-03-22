import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/layout-sub";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Sub: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        INDEX PAGE
      </section>
    </>
  );
};

Sub.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default Sub;
