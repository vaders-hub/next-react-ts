import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <FormattedMessage id="app.content" defaultMessage="Learn React" />
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        INDEX PAGE
      </section>
    </>
  );
};

// Home.getLayout = function getLayout(page: any) {
//   return (
//     <Layout>
//       <div>{page}</div>
//     </Layout>
//   );
// };

export default Home;
