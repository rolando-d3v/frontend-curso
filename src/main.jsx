import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./config/routes";
import { AuthVerify } from "./config/auth_verify/AuthVerify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthVerify>
        <RouterProvider router={router} />
      </AuthVerify>
    </Provider>
  </StrictMode>,
);
