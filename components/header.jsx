import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import NavBar from "./navbar";
import Search from "./search";
// export async function getServerSideProps(context) {
//   console.log('inside from header call serverside')
//   const res = await fetch("http://localhost:3000/api/companies");
//   const companies = await res.json();
//   return {
//     props: {
//       data: companies,
//     },
//   };
// }

const Header = ({ data }) => {
  const [user, setUser] = useState({ value: null });
  // const { data: session } = useSession();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    if (session) {
      signOut();
    }
  };
  return (
    <div>
      <Search user={user} logout={logout} data={data} />
      <NavBar />
    </div>
  );
};
export default Header;
