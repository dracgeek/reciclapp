import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleInstructive.css'

class Instructive extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <React.Fragment>   
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col col-12 col-md-2">
                                    <Link to='/'>
                                        <img src="../../document/logo.jpg" alt="" className="logo mb-3" />
                                    </Link>
                                </div>
                            </div> 
                            <div className="row d-flex justify-content-center">
                                <h3 className="mb-3">Bienvenido Eco-Ciudadano</h3>
                                <ul>
                                <p>Habiendo validado sus datos de inscripción le informamos que sólo la Fundación ReciclApp tendrá acceso a sus datos, los cuales se manejarán con la reserva que define la legislación de Colombia</p>
                                <p>En los proximos días se le hará llegar a su domicilio el KIT  de reciclaje que consta de:</p>
                                <ul>
                                    <li>Bolsa para el almacenamiento de materiales de reciclaje.</li>
                                    <li>Pad magnético con el instructivo resumido de separación y clasificación de reciclaje</li>
                                    <li>Etiquetas con el código QR que deberá colocar en el bolsillo de su bolsa y que tiene el número privado, con el cuál el reciclador asociaría el material reciclado por usted</li>
                                </ul>
                                </ul>
                                <img src="../../document/qrejemplo.jpg" alt="" className="QR mb-3" />
                            </div>
                            <div className="row justify-content-center mb-2">
                                <Link to='/Login'> 
                                    <button type="submit" className="form-control btn btn-lg btn-regresar" name="Regresar">Regresar</button>
                                </Link>
                                <Link to='/ScannerModel'>
                                    <button type="submit" className="form-control btn btn-lg btn-siguiente" name="Siguiente">Siguiente</button>
                                </Link>
                            </div>  
                        </div>
                    </div>
                </div>                       
            </React.Fragment>
        )
    }
}

export default Instructive;