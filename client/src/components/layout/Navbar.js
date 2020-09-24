import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../action/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fa fa-address-book" aria-hidden="true"></i>
          <span className="hide-sm"> Meows</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <i className="fa fa-envelope-open" aria-hidden="true"></i>
          <span className="hide-sm"> Posts</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>
          <span className="hide-sm"> Dashboard</span>{" "}
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          {""} <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fa fa-address-book" aria-hidden="true"></i>
          <span className="hide-sm"> Meows</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          <span className="hide-sm"> Register</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="/login">
          <i className="fa fa-users" aria-hidden="true"></i>
          <span className="hide-sm"> Login</span>{" "}
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fa fa-heartbeat" aria-hidden="true"></i>
          <span> MeowMe</span>
        </Link>
      </h1>
      {!loading && (
        <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
