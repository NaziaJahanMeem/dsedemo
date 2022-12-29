import React from "react";
import Bottom from "../../components/bottom.jsx";
import CompanyTitle from "../../components/companyName.jsx";
import Header from "../../components/header.jsx";
import Info from "../../components/info.jsx";
import LocalNavbar from "../../components/localNavbar.jsx";
import SubNavbar from "../../components/subnavbar.jsx";
export default function info({ data }) {
  return (
    <div>
      <Header data={data} />
      <SubNavbar />
      <CompanyTitle />
      <LocalNavbar />
      <Info />
      <Bottom />
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/companies");
  const companies = await res.json();
  return {
    props: {
      data: companies,
    },
  };
}
