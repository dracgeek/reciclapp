import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class index extends PureComponent {
  render() {
    return (
      
        <form class="form-signin container text-center">
          <img src="http://www.redcicla.com/images/portada4.jpg" class="img-fluid " alt=""></img>
          <img class="mb-4" src="" alt="" width="72" height="72" />
          <h1 class="h3 mt-4 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control col-3 container mt-4" placeholder="Email address" required="" autofocus="" />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control col-3 container mt-4" placeholder="Password" required="" />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
    </label>
          </div>
          <button class="btn btn-primary " type="submit">Sign in</button>
          <h6 class="mt-4">Not registered?</h6>
          <Link to="/Signup">
          <button class="btn btn-primary mt-2" type="submit">Register</button>
          </Link>
          <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
        </form>
      

    )
  }
}

export default index;