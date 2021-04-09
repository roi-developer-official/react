import React from "react";
import ReactDom from "react-dom";
import ErrorBoundry from './errorBoundry';
import MyComponent from './myComponent';

//error boundry prevent component unmonting in case of error
//error boundry works only on class components.
//to use it in a functional component there is a packege called npm i react-error-boundary
/*
Note
Error boundaries do not catch errors for:
Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)
 */
const App = () => {

  return (
      <ErrorBoundry>
          <MyComponent/>
      </ErrorBoundry>
  )
};

ReactDom.render(<App />, document.getElementById("root"));
