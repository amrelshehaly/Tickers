import React, { lazy, Suspense } from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
// import {StoreContext, useStore} from "./context/store.ts";
// import Header from './common/header/index.tsx'

const Header = lazy(() => import("./common/header/index.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  // <React.StrictMode>
  <>
    {/* <StoreContext.Provider value={useStore}> */}
    <Suspense fallback={<>loading...</>}>
      <Header />
      <RouterProvider router={router} />
    </Suspense>
    <Outlet />
    {/* </StoreContext.Provider> */}
  </>
  // </React.StrictMode>
);
