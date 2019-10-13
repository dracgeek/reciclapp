import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import RegisterOne from './components/RegisterOne';
import RegisterForm from './components/RegisterForm';
import Confirmation from './components/Confirmation';
import Instructive from './components/Instructive';
import MaterialScanner from './components/MaterialScanner';

function App() {
  return (
    <BrowserRouter>
         <Switch>

         <Route exact path="/" component={Home} />   
         <Route exact path="/login" component={Login} />   
         <Route exact path="/registerone" component={RegisterOne}/>
         <Route exact path="/registerform" component={RegisterForm}/>
         <Route exact path="/confirmation" component={Confirmation}/>
         <Route exact path="/instructive" component={Instructive}/>
         <Route exact path="/MaterialScanner" component={MaterialScanner}/>

         </Switch>
   

     </BrowserRouter>
  );
}

export default App;
