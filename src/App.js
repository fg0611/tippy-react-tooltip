import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./styles.css"; // optional

const data = "info on tooltip";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tippy
        theme={"tomato"}
        interactive={true}
        content={data}
        placement="right"
      >
        <button>simple botton</button>
      </Tippy>
    </div>
  );
};

export default App;
