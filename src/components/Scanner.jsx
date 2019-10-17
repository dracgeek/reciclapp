import React,{ Component,Fragment} from "react";
import QrReader from "react-qr-scanner"
import '../styles/styleScanner.css';
import Quagga from 'quagga';


class Scanner extends Component  {

  constructor(props){
    super(props);
    this.state ={
      nocamera: false
    }
    this.onDetect = this.onDetect.bind(this)
    
  }

  
  componentDidMount(){
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: '790',
          height: '490'
        },
        numberOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#barcodeScan')
      },
      locate: true,
      decoder: {
        readers: ["code_128_reader", "upc_reader", "upc_e_reader"]
      }
    }, function (err) {
      if (err) {
        return 
      }
      Quagga.start()
    })
    Quagga.onDetected(this.onDetect)
    
  }

  onDetect(res){
    // console.log(res.codeResult.code)
    Quagga.stop()
    Quagga.offProcessed()
    this.props.onBarcodeDetect(res.codeResult.code)
  }

  render() {
    return (
      <Fragment>
            <div d-flex justify-content-center><h4>ESCANER</h4></div>
            <div id="barcodeScan"></div>
      </Fragment>
    )
  }
} 
  
export default Scanner;

