import React, { lazy, Suspense } from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Header = lazy(() => import("./common/header/index.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./App.tsx")),
    // errorElement: <ErrorBoundaryPage />,
    // children: [
    //   {
    //     path: "/",
    //     Component: lazy(() => import('./App.tsx')),
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<>loading...</>}>
      <Header />
      <RouterProvider router={router} />
    </Suspense>
    <Outlet />
  </React.StrictMode>
);
