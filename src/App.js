import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Componentes React */
import Home from './components/Home';
import Login from './components/Login';
import RegisterOne from './components/RegisterOne';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <BrowserRouter>
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/registerone" component={RegisterOne}/>
         <Route exact path="/registerform" component={RegisterForm}/>
         </Switch>
     </BrowserRouter>
  );
}

export default App;