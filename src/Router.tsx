import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import About from "./pages/About";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import VolleyApp from "./pages/portfolio/VolleyApp";
import YMTSite from "./pages/portfolio/YmtSite";

function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Work /> },
        { path: "/about", element: <About /> },
        { path: "/volley", element: <VolleyApp /> },
        { path: "/ymt", element: <YMTSite /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
