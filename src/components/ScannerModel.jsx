import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

class ScannerModel extends Component {

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
            <div className="row ">
                <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                    <img src="../../document/logo.jpg" alt="" className="logo mb-3" />
                   <Link to="/scanner">
                        <button type="submit" className="btn btn-lg btn-cb mb-4">ESCANEAR CODIGO DE BARRA</button>
                   </Link>
                   <Link to="/materialscanner2">
                        <button type="submit" className="btn btn-lg btn-ingreso">INGRESO DE PRODUCTOS</button>
                   </Link>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default ScannerModel