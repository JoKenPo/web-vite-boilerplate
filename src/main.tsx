import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from './contexts/_Contexts'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirectUri: window.location.origin + "/login"
      }}
    // audience={import.meta.env.VITE_AUTH0_AUDIENCE}
    > */}
    <Providers>
      <App />
    </Providers>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
