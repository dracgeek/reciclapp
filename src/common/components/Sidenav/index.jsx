import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./styles.css"

export class Sidenav extends PureComponent {
    render() {
        return (

            <div className="container col-control">
                <SideNav
                    className="customSideNav"
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >

                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="Dashboard" >
                            <NavIcon>
                                <Link to="/">
                                    <img src="https://image.flaticon.com/icons/svg/748/748060.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/"  >
                                    Dashboard
                         </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Users" >
                            <NavIcon>
                                <Link to="/Users">
                                    <img src="https://image.flaticon.com/icons/svg/32/32441.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Users"  >
                                    Users
                         </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Appointment" >
                            <NavIcon>
                                <Link to="/Appointment">
                                    <img src="https://image.flaticon.com/icons/svg/833/833593.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Appointment"  >
                                    Appointment
                         </Link>
                            </NavText>
                        </NavItem>


                        <NavItem eventKey="QRcode" >
                            <NavIcon>
                                <Link to="/QRcode">
                                    <img src="https://image.flaticon.com/icons/svg/37/37227.svg" width="20px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/QRcode">
                                    Qr code
                         </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Exit" >
                            <NavIcon>
                                <Link to="/Signin">
                                    <img src="https://image.flaticon.com/icons/svg/25/25376.svg" width="20px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Signin">
                                    Exit
                        </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Configuration">
                            <NavIcon>
                                <img src="https://image.flaticon.com/icons/svg/60/60473.svg" width="20px" alt="" />
                            </NavIcon>
                            <NavText>
                                Configuration
            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default Sidenav;
