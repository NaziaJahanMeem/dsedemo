import Header from "../../../components/header";
export async function getServerSideProps({ params: { code } }) {
  let res = await fetch(`http://localhost:3000/api/companies/${code}`);

  const companyDetail = await res.json();
  res = await fetch("http://localhost:3000/api/companies");
  const companies = await res.json();

  return {
    props: {
      companyDetail: companyDetail,
      companies: companies,
    },
  };
}
const Details = ({ companies, companyDetail }) => {
  return (
    <div>
      <Header data={companies} />
      <h1>{companyDetail.name}</h1>
      <h1>Trading Code: {companyDetail.code}</h1>
    </div>
  );
};
export default Details;
