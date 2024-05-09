import * as React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);