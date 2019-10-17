import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/styleRegisterOne.css'

class RegisterOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: ''
        }
    }

    onSubmit = async(eventObject) => {
        const registerUser = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        }
        await axios.post('http://localhost:4000/api/users/signup', registerUser);
    }

    onInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        });
        console.log(eventObject.target.name,eventObject.target.value);
    }

    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <Link to='/'>
                                <img src="../../document/logo.jpg" alt="" className=" logo mb-3"/>
                            </Link>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input onChange={this.onInputChange} type="text" className="form-control" name="fullName" placeholder="Nombre Usuario"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.onInputChange} type="email" className="form-control" name="email" placeholder="Correo Electronico"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.onInputChange} type="password" className="form-control" name="password" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group">
                                <button type="submit" className="form-control btn btn-lg" name="button">Registrarse</button>
                                    {/* <Link to='/RegisterForm'>
                                    </Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RegisterOne;