import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/categories"}>Categories</Link>
      <Link to={"/stats"}>Statistics</Link>
    </div>
  );
};

export default Navbar;
