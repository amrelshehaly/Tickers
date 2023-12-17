import React, { Suspense } from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Header from './common/header/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      <Header />
      <RouterProvider router={router} />
    </Suspense>
    <Outlet />
  </React.StrictMode>
);
