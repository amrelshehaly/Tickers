import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./theme.ts";
// import Header from "./common/header/index.tsx";

const Header = lazy(() => import("./common/header/index.tsx"))

const router = createBrowserRouter([
  {
    path: '/',
    Component: lazy(() => import('./App.tsx')),
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
    <ThemeProvider theme={Theme}>
      <Suspense fallback={<>loading...</>}>
        <Header />
        <RouterProvider router={router} />
      </Suspense>
      <Outlet />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
