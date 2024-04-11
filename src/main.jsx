import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import Champions from "./pages/Champions.jsx";
import TierList from "./pages/TierList.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { HelmetProvider } from "react-helmet-async";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Champions />,
      },
      {
        path: "/tierlist",
        element: <TierList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
