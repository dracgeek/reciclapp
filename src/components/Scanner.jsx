import React, { Component, Fragment } from "react";
import "../styles/styleScanner.css";
import Quagga from "quagga";
import { Link } from "react-router-dom";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nocamera: false
    };
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            width: "790",
            height: "490"
          },
          numberOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector("#barcodeScan")
        },
        locate: true,
        decoder: {
          readers: ["code_128_reader", "upc_reader", "upc_e_reader"]
        }
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(data => {
      console.log(data);
      document.querySelector("#codigo").innerHTML = data.codeResult.code;
    });
  }

  render() {
    return (
      <Fragment>
        <div id="codigo" className="container mx-auto"></div>
        <div className="container p-4">
          <div className="row ">
            <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
              <h4>ESCANEAR CÓDIGO BARRAS</h4>
              <div id="barcodeScan"></div>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col">
              <Link to="/MaterialScanner">
                <button
                  type="button"
                  className="btn-lg btn-primary"
                  name="Almacenar Nuevamente"
                >
                  Siguiente
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Scanner;
