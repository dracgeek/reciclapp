import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleRegisterOne.css'

class RegisterOne extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <Link to='/'>
                                <img src="../../document/logo.jpg" alt="" className=" logo mb-3"/>
                            </Link>
                            <form action="">
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Correo Electronico"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Confirmar Contraseña"/>
                                </div>
                                <div className="form-group">
                                    <Link to='/RegisterForm'>
                                        <button type="submit" className="form-control btn btn-lg" name="button">Registrarse</button>
                                    </Link>
                                </div>
                            </form>   
                        </div>
                    </div>             
                </div>          
            </React.Fragment>
        )
    }
}

export default RegisterOne;