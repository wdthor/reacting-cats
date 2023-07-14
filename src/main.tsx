import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import { robots } from "./robots";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Card
        id={robots[0].id}
        username={robots[0].username}
        email={robots[0].email}
      />
      <Card
        id={robots[1].id}
        username={robots[0].username}
        email={robots[0].email}
      />
      <Card
        id={robots[2].id}
        username={robots[0].username}
        email={robots[0].email}
      />
    </div>
  </React.StrictMode>
);
