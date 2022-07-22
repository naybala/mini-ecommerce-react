import React, {Fragment} from "react";
import MainRouter from "./Component/Router/MainRouter";


import "./App.css"
function App(props) {
  return (
        <Fragment>
          <MainRouter {...props}/>
        </Fragment>
  );
}
export default App;
