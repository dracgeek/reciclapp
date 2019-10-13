import React from "react";
import QrReader from "react-qr-reader"
import { Link } from "react-router-dom";

class MaterialScanner extends React.Component {
    state ={
        result:'No result'
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
            <div>   
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{width: '100%'}}
                    resolution={600}
                />
                <p>{this.state.result}</p>             
            </div>
        )
    }
}



export default MaterialScanner;