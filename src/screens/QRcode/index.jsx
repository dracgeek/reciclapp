import React, { PureComponent } from 'react';
import { QRCode } from "react-qr-svg";

export class index extends PureComponent {
    render() {
        return (
            <form className="container mt-5">
            <QRCode 
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value=""
                >
        
                </QRCode>
                </form>
        );
    }
}

export default index;
