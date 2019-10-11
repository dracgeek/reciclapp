import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleHome.css'


class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
               <div className="container-fluid">
                    <div className="row ">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="../../document/logo.jpg" alt="" className="logo mb-3" />
                           <Link to="/login">
                                <button type="submit" className="btn btn-lg btn-login mb-4">INICIAR SESION</button>
                           </Link>
                           <Link to="/RegisterOne">
                                <button type="submit" className="btn btn-lg btn-signup">REGISTRARSE</button>
                           </Link>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Home;