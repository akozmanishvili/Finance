import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" ? <Navbar></Navbar> : null}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
