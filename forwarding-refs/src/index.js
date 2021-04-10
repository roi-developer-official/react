import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import FancyButton from "./fancyButton";
const App = () => {
  const ref = React.createRef();
  let [textContent, setTextContent] = useState("Click Me!");

  function changeTextContent() {
    let newTextContent;
    newTextContent = textContent === "Click Me!" ? "Press Me!" : "Click Me!";
    setTextContent(newTextContent);
  }

  return (
    <FancyButton onClick={changeTextContent} ref={ref}>
      {textContent}
    </FancyButton>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
