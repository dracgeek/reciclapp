import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleRegisterForm.css'

class RegisterForm extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col overflow-auto">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Link to='/'>
                                        <img src="../../document/logo.jpg" className="logo" alt=""/>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center title">
                                    <h3>Formulario de Registro</h3>
                                </div>    
                            </div>
                            <form action="">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Nombre Completo</h6>
                                        <input type="text" className="form-control" name="fullName" placeholder="Nombre Completo"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Tipo de Documento</h6>
                                        <select name="typeDocument" id="" className="form-control">
                                            <option value="">t1</option>
                                            <option value="">t2</option>
                                            <option value="">t3</option>
                                        </select>     
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Número de Documento</h6>
                                        <input type="number" className="form-control" name="numberDocument" placeholder="Numero de Documento"/>     
                                    </div>           
                                </div>
                                <div className="form-group">
                                    <h6>Confirmación de Email</h6>
                                    <input type="email" className="form-control" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Número de Teléfono Móvil</h6>
                                        <input type="number" className="form-control" name="mobilePhone" placeholder="Número de Teléfono Móvil"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Dirección de Residencia</h6>
                                        <input type="text" className="form-control" name="addressHouse" placeholder="Dirección de Residencia"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Barrio</h6>
                                        <select type="text" name="neighborhood" id="" className="form-control">
                                            <option value="">B1</option>
                                            <option value="">B2</option>
                                            <option value="">B3</option>
                                        </select> 
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Tipo de Vivienda</h6>
                                        <select type="text" name="typeHouse" id="" className="form-control">
                                            <option value="">TV1</option>
                                            <option value="">TV2</option>
                                            <option value="">TV3</option>
                                        </select> 
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-4">
                                        <h6>Número de Residentes</h6>
                                        <input type="number" className="form-control" name="memberHouse" placeholder="Tipo de Vivienda"/>
                                    </div>
                                </div>
                                <div className="form-group row d-flex justify-content-center">
                                    <Link to='/RegisterOne'> 
                                        <button type="submit" className="form-control btn btn-lg btn-regresar" name="Regresar">Regresar</button>
                                    </Link>
                                    <Link to='/Confirmation'>
                                        <button type="submit" className="form-control btn btn-lg btn-siguiente" name="Siguiente">Siguiente</button>
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

export default RegisterForm;