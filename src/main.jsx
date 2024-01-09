import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
