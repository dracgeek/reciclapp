import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class index extends PureComponent {
  render() {
    return (
      
        <form className="form-signin container text-center">
          
          <img className="mb-4" src="" alt="" width="72" height="72" />
          <h1 className="h3 mt-4 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control col-3 container mt-4" placeholder="Email address"  />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control col-3 container mt-4" placeholder="Password" />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
    </label>
          </div>n
          <button className="btn btn-primary " type="submit">Sign in</button>
          <h6 className="mt-4">Not registered?</h6>
          <Link to="/Signup">
          <button className="btn btn-primary mt-2" type="submit">Register</button>
          </Link>
          <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
        </form>
      

    )
  }
}

export default index;