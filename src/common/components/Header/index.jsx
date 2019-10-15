import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

export class Header extends PureComponent {
  render() {
    return (
      <div className="container">
      <Link to="/">
      <img src="https://i.ibb.co/PZ3BbpS/q.png" width="110" height="55" alt="" />
      </Link>
      </div>
    );
  }
}

export default Header;
