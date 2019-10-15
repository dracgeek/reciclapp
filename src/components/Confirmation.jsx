import React from "react";
import { Link } from "react-router-dom";
import '../styles/styleConfirmation.css'

class Confirmation extends React.Component {
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
                            <div className="row">
                                <div className=" mt-4 mb-4 col col-12 d-flex align-items-center justify-content-center posts">
                                    <table>
                                         <tr>
                                             <td colSpan="3">
                                                 <h3 className="d-flex align-items-center justify-content-center mx-5 mb-4">Confirmar correo electrónico</h3>
                                                 <p className="d-flex align-items-center justify-content-center">La Fundación ReciclApp le confirma su registro exitoso en nuestra comunidad de eco-ciudadanos que tienen el firme interés de garantizar que los residuos o materiales que reciclen efectivamente van a ser recuperados y van a apoyar económicamente a familias de recicladores. </p>
                                                 <p className="d-flex align-items-center justify-content-center">Para poder activar su cuenta,deberá de validar su cuenta de correo electrónico, para lo que deberá de ingresar a su buzón de correo y seguir el enlace que se le envia de ReciclApp</p>
                                             </td>
                                         </tr>
                                         <tr>
                                             <td colSpan="3" className="d-flex justify-content-center">
                                                <Link to='/'> 
                                                    <button type="submit" className="form-control btn btn-lg" name="email">Ir al email</button>
                                                </Link>
                    
                                             </td>
                                         </tr>
                                    </table>                       
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>       
            </React.Fragment>
        )
    }
}

export default Confirmation;