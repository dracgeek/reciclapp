import React from "react";
//import { Link } from "react-router-dom";

class Tostore extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Codigo_Barra</th>
                                        <th>Tipo_Material</th>
                                        <th>Cantidad_Materiales</th>
                                        <th></th>
                                        <th></th>                                        
                                    </tr>                                       
                                </thead>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <td>Codigo_Barra</td>
                                        <td>Tipo_Material</td>
                                        <td>Cantidad_Materiales</td>
                                        <td><button type="button" onClick className="btn btn-sm btn-delete">Eliminar</button></td>
                                                            
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Tostore