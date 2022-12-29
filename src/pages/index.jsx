import Header from "../../components/header";
import Bottom from "../../components/bottom.jsx";
import CompanyTitle from "../../components/companyName.jsx";

import Info from "../../components/info.jsx";
import LocalNavbar from "../../components/localNavbar.jsx";
import SubNavbar from "../../components/subnavbar.jsx";
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/companies");
  const companies = await res.json();
  return {
    props: {
      data: companies,
    },
  };
}
const Home = ({ data }) => {
  //console.log(data)
  return (
    <div>
      <Header data={data} />
    </div>
  );
};
export default Home;
