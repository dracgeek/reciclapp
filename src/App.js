import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './screens/Dashboard';
import Users from './screens/Users';
import Configuration from './screens/Configuration';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Header from './common/components/Header';
import Sidenav from "./common/components/Sidenav";
import QRcode from "./screens/QRcode";
import Date from "./screens/Date";

function App() {
  return (
    <BrowserRouter>
      
          <Sidenav/>

      <div class="row">
        {/* <div class="col"> 
          
         </div> */}
        <div class="col">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />   
          <Route exact path="/Signup" component={Signup} />  
          <Route exact path="/Signin" component={Signin} />  
          <Route exact path="/Configuration" component={Configuration} />   
          <Route exact path="/Users" component={Users} />
          <Route exact path="/QRcode" component={QRcode} />
          <Route exact path="/Date" component={Date} />   
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;