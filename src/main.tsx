import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import DataContext from "./context/DataContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataContext>
        <AuthContext>
          <App></App>
        </AuthContext>
      </DataContext>
    ),
    HydrateFallback: () => <div>Loading...</div>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        lazy: () =>
          import("./pages/Login.jsx").then((module) => ({
            element: <module.default />,
          })),
      },
      {
        element: <ProtectedRoute></ProtectedRoute>,
        children: [
          {
            index: true,
            lazy: () =>
              import("./pages/Home.jsx").then((module) => ({
                element: <module.default />,
              })),
          },
          {
            path: "/categories",
            lazy: () =>
              import("./pages/Categories.jsx").then((module) => ({
                element: <module.default />,
              })),
          },
          {
            path: "/stats",
            lazy: () =>
              import("./pages/Stats.jsx").then((module) => ({
                element: <module.default />,
              })),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
