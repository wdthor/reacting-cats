import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./components/CardList";
import "@csstools/normalize.css";
import "./assets/main.css";
import { cats } from "./cats";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardList cats={cats} />
  </React.StrictMode>
);
