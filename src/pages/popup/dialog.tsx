import type { NextPage } from "next";
import Popup from "../../components/popup";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3002/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Dialog: NextPage = ({ data }: any) => {
  return (
    <Popup>
      <div>popup {data.name}</div>
    </Popup>
  );
};
export default Dialog;
