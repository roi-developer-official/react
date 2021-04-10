import React from "react";
import ReactDom from "react-dom";
import BlogPost from "./blogPost";
import CommentList from "./commentList";

//Notes: 
//1. dont call HOC inside a render - this will cause performence issues due to unmounitg every time.
//2. static method do not pass to the wrapped components - in this code you can see the solution.
//3. refs also do not pass to the wrapped components - you can see the forwarding ref directory for the solution.
const App = () => {
  const extraProp = () => {
    console.log("rendered HOC");
  };

  return (
    <>
      <BlogPost extraProp={extraProp} injectedProp="Comments" />
      <CommentList extraProp={extraProp} injectedProp="Blog posts" />
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
