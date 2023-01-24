import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InputValueProvider } from "./context-example/InputValueContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InputValueProvider>
      <App heading="Welcome to this course!" />
    </InputValueProvider>
  </React.StrictMode>
);
