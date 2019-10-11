import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './screens/Dashboard';
import Users from './screens/Users';
import Configuration from './screens/Configuration';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
// import Header from './common/components/Header';
import Sidenav from "./common/components/Sidenav";
import Input from "./screens/Input";


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div class="row">
        <div class="col">
          <Sidenav/>
        </div>
        <div class="col-10">
        <Switch>
          <Route exact path="/" component={Dashboard} />   
          <Route exact path="/Signup" component={Signup} />  
          <Route exact path="/Signin" component={Signin} />  
          <Route exact path="/Input" component={Input} /> 
          <Route exact path="/Configuration" component={Configuration} />   
          <Route exact path="/Users" component={Users} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
