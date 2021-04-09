import React, { Suspense , lazy} from "react";
import ReactDom from "react-dom";
import Img from "./Img.jpg";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./style.css";
import Loading from "./loading";
const Home = lazy(()=>import('./home'));

const App = () => {
  return (
    <div>
      Hello world
      <img src={Img}></img>
      <Suspense fallback={<Loading/>}>
      <Router>
        <NavLink to="/home">Go</NavLink>
        <Route exact path="/home" component={Home}></Route>
      </Router>
      </Suspense>
      <p>red color</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
