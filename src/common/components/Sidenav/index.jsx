import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

export class Sidenav extends PureComponent {
    render() {
        return (
            <div className="d-flex toggled container-fluid" id="wrapper">


                <div class="bg-light border-right" id="sidebar-wrapper">

                    <div className="list-group list-group-flush">
                        <Link className="container" to="/" >
                            <img src="https://i.ibb.co/PZ3BbpS/q.png" width="110" height="55" alt="" />
                        </Link>
                        <Link to="/"  >
                            <a class="list-group-item list-group-item-action bg-light mt-3" href="/"><img src="https://image.flaticon.com/icons/svg/565/565489.svg" width="20px" alt="" /> Dashboard</a>
                        </Link>
                        <Link to="/Users">
                            <a href="/" class="list-group-item list-group-item-action bg-light"> <img src="https://image.flaticon.com/icons/svg/33/33308.svg" width="20px" alt="" /> Users</a>
                        </Link>
                        <Link to="/Input">
                            <a href="/" class="list-group-item list-group-item-action bg-light"> <img src="https://image.flaticon.com/icons/svg/72/72362.svg" width="20px" alt="" /> Input</a>
                        </Link>
                        <Link to="/Configuration">
                            <a href="/" class="list-group-item list-group-item-action bg-light"> <img src="https://image.flaticon.com/icons/svg/60/60473.svg" width="20px" alt="" /> Configuration</a>
                        </Link>
                        <Link to="/Signin">
                            <a href="/" class="list-group-item list-group-item-action bg-light"> <img src="https://image.flaticon.com/icons/svg/25/25376.svg" width="20px" alt="" /> Exit</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidenav;
