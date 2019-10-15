import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Componentes React */
import Home from './components/Home';
import Login from './components/Login';
import RegisterOne from './components/RegisterOne';
import RegisterForm from './components/RegisterForm';
import Confirmation from './components/Confirmation';
import Instructive from './components/Instructive';
import MaterialScanner from './components/MaterialScanner';
import Prueba from './components/Prueba';

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
         <Route exact path="/Prueba" component={Prueba}/>
         

         </Switch>
     </BrowserRouter>
  );
}

export default App;