import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import Stats from "./pages/Stats.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContext>
        <App></App>
      </AuthContext>
    ),
    errorElement: <Error></Error>,
    children: [
      { path: "/login", element: <Login></Login> },
      {
        element: <ProtectedRoute></ProtectedRoute>,
        children: [
          { index: true, element: <Home></Home> },
          { path: "/categories", element: <Categories></Categories> },
          { path: "/stats", element: <Stats></Stats> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
