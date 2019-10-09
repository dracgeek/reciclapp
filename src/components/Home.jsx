import React from "react";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                Hola Mundo 
                <Link to="/login">
                <button type="button" class="btn btn-primary">Primary</button>
                </Link>               
                </div>          
            </React.Fragment>
        )
    }
}

export default Home;