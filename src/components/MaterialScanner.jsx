import React from "react";
import QrReader from "react-qr-scanner";
import { Link } from "react-router-dom";
import '../styles/styleMaterialScanner.css';


class MaterialScanner extends React.Component {
    state ={
        result:'Escanear Producto'
    }
    /* Función de Captura*/
    handleScan = data =>{
        if(data){
            this.setState({
                result: data
            })
        }
    }
    handleError = err =>{
        console.error(err)
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="">
                            <div className="form-group col-12 col-md-6 d-flex justify-content-center">
                                <Link to='/'>
                                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                                </Link>
                            
                            </div>
                            <div className="form-group row d-flex justify-content-center mb-0 video">
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{width: '100%',height:'70%',}}
                                    resolution={600}
                                />
                            </div>
                            <div className="row form-group d-flex justify-content-center mt-0">
                                <p>{this.state.result}</p> 
                            </div>
                            <div className="row form-group d-flex justify-content-center">
                                <div className="col-12 col-md-6">
                                    <h6>Tipo de Material</h6>
                                    <select type="text" name="materialtype" id="">
                                        <option value="">Plastico</option>
                                        <option value="">Carton</option>
                                        <option value="">Aluminio</option>
                                        <option value="">Vidrio</option>
                                        <option value="">Ordinario</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group d-flex justify-content-center">
                                <div className="col-12 col-md-6">
                                    <h6>Cantidad de Material</h6>
                                    <select type="number" name="materialaccount" id="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center">
                                <Link to='/'> 
                                    <button type="submit" className="form-control btn btn-lg btn-regresar" name="Regresar">Home</button>
                                </Link>
                                <Link to='/Confirmation'>
                                    <button type="submit" className="form-control btn btn-lg btn-siguiente" name="Siguiente">Siguiente</button>
                                </Link>
                            </div>
                        </form>    
                    </div>
                </div>            
            </div>
        )
    }
}



export default MaterialScanner;