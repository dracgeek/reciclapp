import React from "react";
import QrReader from "react-qr-scanner";
import { Link } from "react-router-dom";
import Scanner from "../components/Scanner"
import '../styles/styleMaterialScanner.css';

class MaterialScanner extends React.Component {
    
  constructor(props){
    super(props);
    this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
  }

  _onBarcodeDetect(barcode){
    this.props.process(barcode)
  }
    render() {
        return (
          <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Link to='/registerform'>
                                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                                </Link>  
                            </div>
                            
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <h3>Material a Reciclar</h3>
                            </div>
                        </div>
                        <form action="">
                            <div className="form-group row">
                                <div className="col col-12">
                                    <h6>Codigo de Barra</h6>
                                    <input type="number" placeholder="codigo de barra" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col col-12">
                                    <h6>Tipo de Material</h6>
                                    <select name="text" id="" className="form-control">
                                        <option value="">Carton</option>
                                        <option value="">Plastico</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col col-12 ">
                                    <h6>Cantidad de Material</h6>
                                    <input type="number" id="" className="form-control" min="0" max="1000"/>
                                </div>
                            </div>
                            <div className="form-group row d-flex mb-4 justify-content-center">
                                <Link to='/Scanner'> 
                                    <button type="button" className="form-control btn btn-lg btn-escanear" name="Escanear Nuevamente">Escanear Nuevamente</button>
                                </Link>
                                <Link to='/tostore'> 
                                    <button type="button" className="form-control btn btn-lg btn-almacenar" name="Almacenar Nuevamente">Almacenar</button>
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

export default MaterialScanner;