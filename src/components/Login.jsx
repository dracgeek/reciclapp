import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                Hola Mundo                
                </div>
                <Link to="/">
                <button type="button" class="btn btn-success">success</button>
                </Link>
           
              
            </React.Fragment>
        )
    }
}

export default Login;