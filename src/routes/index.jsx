import { Navigate, useLocation, useRoutes } from "react-router-dom";
// paths
import { getRoute } from "./paths";
// elements
import { MainPage } from "./elements";
// constants
import { COMPANY_NAME } from "../config/constants";
// hooks
import { t } from "i18next";
import { Layout } from "src/components/Layout";

export default function Router() {
  const pathName = useLocation().pathname;
  const matchRoute = getRoute(pathName, "path");
  const pageTitle = matchRoute ? matchRoute.path : "404";
  document.title = `${t(COMPANY_NAME)} | ${t(pageTitle)}`;

  const routes = [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/todo/create",
          element: <MainPage />,
        },
        {
          path: "/todo/detail/:id",
          element: <MainPage />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ];

  return useRoutes(routes);
}
