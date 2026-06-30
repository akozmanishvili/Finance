import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
