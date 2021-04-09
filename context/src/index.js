import React from "react";
import ReactDom from "react-dom";
import ContextExA from "./contextExA";

//common Gotchas in context:
//the component will re-renderd when new value object is created.

const App = () => {
  return <ContextExA />;
};

ReactDom.render(<App />, document.getElementById("root"));
