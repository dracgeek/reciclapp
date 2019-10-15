import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

export class index extends PureComponent {
    render() {
        return (
            
            <form class="form-signin text-center" action="/users/signup" method="post">
                
                <img class="mb-5 mt-5" src="" alt="" width="250" height="95" />
                <h1 class="h4 mb-3 font-weight-normal mt-4">Sign up</h1>
                <label for="inputEmail" class="sr-only">Name</label>
                <input type="text" id="inputEmail" class="form-control col-4 container mt-4" placeholder="Name" name="name" autofocus="" />
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control col-4 container mt-4" placeholder="Email address" required="" autofocus="" />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control col-4 container mt-4" placeholder="Password" required="" />
                <label for="inputPassword" class="sr-only">Confirm Password</label>
                <input type="password" id="inputPassword" class="form-control col-4 container" placeholder="Confirm password" required="" />
                <Link to="/Signin">
                <button class="btn btn-primary mt-5" type="submit">Sign up</button>
                </Link>
                <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
            </form>
        );
    }
}

export default index;
