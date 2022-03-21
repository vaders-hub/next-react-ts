import type { NextPage } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout2 from "@components/layout2";
import NestedLayout from "@components/layout-nested";

const About = () => {
  return <div>about nested</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout2>
      <NestedLayout>{page}</NestedLayout>
    </Layout2>
  );
};

export default About;
