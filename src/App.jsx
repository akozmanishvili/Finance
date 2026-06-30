import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div>App</div>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
