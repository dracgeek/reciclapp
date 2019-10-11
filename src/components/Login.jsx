import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleLogin.css'

class Login extends React.Component {
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
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label className="form-check-label mt-0" for="inlineCheckbox1">Usuario</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                      <label className="form-check-label mt-0" for="inlineCheckbox2">Administrador</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                      <label className="form-check-label mt-0" for="inlineCheckbox3">Recolector</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Link>
                                        <button type="submit" className="form-control btn btn-lg" name="button">Entrar</button>
                                    </Link>
                                </div>
                                <div className="form-group">
                                    <a href="" className="text-muted d-flex justify-content-center">¿Olvidaste la contraseña?</a>
                                </div>
                            </form>   
                        </div>
                    </div>             
                </div>          
            </React.Fragment>
        )
    }
}

export default Login;