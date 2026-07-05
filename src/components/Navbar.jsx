import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { logout, loggedIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = () => {
    logout();
    return navigate("/login");
  };
  return (
    <div>
      <Link to={"/"}>Home Page</Link>
      {loggedIn || <Link to={"/login"}>Login</Link>}
      <Link to={"/categories"}>Categories</Link>
      <Link to={"/stats"}>Statistics</Link>
      <button type="button" onClick={handleSubmit}>
        Log out
      </button>
    </div>
  );
};

export default Navbar;
