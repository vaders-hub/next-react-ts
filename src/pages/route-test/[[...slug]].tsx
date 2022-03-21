import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";

const RouteTest: NextPage = ({ data }: any) => {
  const router: NextRouter = useRouter();
  const { slug } = router.query;
  const { name } = data;

  return <div>{name}</div>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3002/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default RouteTest;
