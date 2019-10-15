import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/styleRegisterForm.css'

class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            // typeDocumentSelected: '' Incialmente lo necesito
            typeDocuments: [],
            neighborhoods: [],
            typeHouses: [],

            /* Valor de cada name, para enviar al backend */
            fullName: '',
            numberDocument: '',
            mobilePhone: '',
            email: '',
            addressHome: '',
            membersHome: '',
            typeDocument: '',
            neighborhood: '',
            typeHouse: '',
        }
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/usersForm/typeDocuments');
        const res2 = await axios.get('http://localhost:4000/api/usersForm/neighborhoods');
        const res3 = await axios.get('http://localhost:4000/api/usersForm/houses');
        /* Solo obtengo un campo, no todo el objeto */
        this.setState({
            typeDocuments: res.data,
            typeDocument: res.data[0].id,
            /* Para obtener no el objeto completo sino el campo */
            // typeDocuments: res.data.map(document => document.typeDocument),
            // typeDocument: res.data[0].typeDocument, //para inicie con un valor por defecto siempre.

            neighborhoods: res2.data,
            neighborhood: res2.data[0].id, //para inicie con un valor por defecto siempre.
            /* Para obtener no el objeto completo sino el campo */
            // neighborhoods: res2.data.map(neighborhood => neighborhood.neighborhood),
            // neighborhood: res2.data[0].neighborhood, //para inicie con un valor por defecto siempre.
            
            typeHouses: res3.data,
            typeHouse: res3.data[0].id
            /* Para obtener no el objeto completo sino el campo */
            // typeHouses: res3.data.map(house => house.typeHouse),
            // typeHouse: res3.data[0].typeHouse, //para inicie con un valor por defecto siempre.
        });
        // console.log(this.state.typeDocument);
        // console.log(this.state.neighborhood);
        // console.log(this.state.house);
    }    
    
    onSubmit = async (eventObject) => {
        // eventObject.preventDefault();
        /* Enviando la data al backend */
        const tableUsers = {
            fullName: this.state.fullName,
            numberDocument: this.state.numberDocument,
            mobilePhone: this.state.mobilePhone,
            email: this.state.email,
            addressHome: this.state.addressHome,
            membersHome: this.state.membersHome,
            document_id: this.state.typeDocument,
            neighborhood_id: this.state.neighborhood,
            house_id: this.state.typeHouse,
        }
        await axios.post('http://localhost:4000/api/usersForm/create', tableUsers);
        this.setState({
            fullName: ' ',
            numberDocument: ' ',
            mobilePhone: ' ',
            email: ' ',
            addressHome: ' ',
            membersHome: ' '
        })
    }

    onSelectAndInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        })
        // console.log(eventObject.target.name, eventObject.target.value);
        // console.log(this.state.typeDocument);
        // console.log(this.state.neighborhoods);
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col overflow-auto">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Link to='/registerform'>
                                        <img src="../../document/logo.jpg" className="logo" alt=""/>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center title">
                                    <h3>Formulario de Registro</h3>
                                </div>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <h6>Nombre Completo</h6>
                                        <input value={this.state.fullName} onChange={this.onSelectAndInputChange} type="text" className="form-control" name="fullName" placeholder="Nombre Completo"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Tipo de Documento</h6>
                                        { /* Solo obtengo un campo, no todo el objeto */}
                                        <select onChange={this.onSelectAndInputChange} name="typeDocument" className="form-control">
                                            {
                                                this.state.typeDocuments.map(typeDocument => 
                                                <option key={typeDocument.id} value={typeDocument.id}>
                                                    {typeDocument.typeDocument}
                                                </option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Número de Documento</h6>
                                        <input value={this.state.numberDocument} onChange={this.onSelectAndInputChange} type="text" className="form-control" name="numberDocument" placeholder="Numero de Documento"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <h6>Confirmación de Email</h6>
                                    <input value={this.state.email} onChange={this.onSelectAndInputChange} type="email" className="form-control" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Número de Teléfono Móvil</h6>
                                        <input value={this.state.mobilePhone} onChange={this.onSelectAndInputChange} type="text" className="form-control" name="mobilePhone" placeholder="Número de Teléfono Móvil"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Dirección de Residencia</h6>
                                        <input value={this.state.addressHome} onChange={this.onSelectAndInputChange} type="text" className="form-control" name="addressHome" placeholder="Dirección de Residencia"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-6">
                                        <h6>Barrio</h6>
                                        <select onChange={this.onSelectAndInputChange} type="text" name="neighborhood" className="form-control">
                                            {
                                                this.state.neighborhoods.map(neighborhood => 
                                                <option key={neighborhood.id} value={neighborhood.id}>
                                                    {neighborhood.neighborhood}
                                                </option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h6>Tipo de Vivienda</h6>
                                        <select onChange={this.onSelectAndInputChange} type="text" name="typeHouse" className="form-control">
                                            {
                                                this.state.typeHouses.map(house => 
                                                <option key={house.id} value={house.id}>
                                                    {house.typeHouse}
                                                </option>)
                                            }
                                        </select> 
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 col-md-4">
                                        <h6>Número de Residentes</h6>
                                        <input value={this.state.membersHome} onChange={this.onSelectAndInputChange}  type="text" className="form-control" name="membersHome" placeholder="Tipo de Vivienda"/>
                                    </div>
                                </div>
                                <button type="submit" className="form-control btn btn-lg btn-siguiente" name="Siguiente">Registrarse</button>
                                <div className="form-group row d-flex justify-content-center">
                                    <Link to='/RegisterOne'> 
                                        <button type="button" className="form-control btn btn-lg btn-regresar" name="Regresar">Regresar</button>
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

export default RegisterForm;