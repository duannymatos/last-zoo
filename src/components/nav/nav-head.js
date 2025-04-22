import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { connect } from "react-redux";
import axios from "axios"
import { withRouter } from "react-router-dom";
import { role, isLoggedIn } from "../login/isloggedIn"


const Nav = (props) => {

    function submitLogout(e) {

        localStorage.clear();
    }

    const NotLoggedIn = () => (

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-head nav-link text-white" to="/">Home<span className="sr-only>"></span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-head nav-link text-white" to="/zoo">Zoo<span className="sr-only>"></span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-head nav-link text-white" to="/login">Login<span className="sr-only>"></span></Link>
            </li>
        </ul>
    )

    const UserLoggedIn = () => (

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

            <li className="nav-item active">
                <Link className="nav-head nav-link text-white" to="/">Home<span className="sr-only>"></span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-head nav-link text-white" to="/zoo">Zoo<span className="sr-only>"></span></Link>
            </li>

            {role() === true && (
                <li className="nav-item active">
                    <Link className="nav-head nav-link text-white" to="/dashboard">Dashboard</Link>
                </li>
            )}

            <li className="nav-item active">
                <a className="nav-head nav-link text-white" onClick={() => { props.onLogout(); submitLogout() }} href="/">Logout</a>
            </li>
        </ul>
    )

    return (

        <nav className="navbar navbar-expand-lg navbar-dark">

            <img src={logo} className="logo-last navbar-brand hero-text-box img-responsive" alt="logo" to="/" />
            <Link className="navbar-brand " to="" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                {!isLoggedIn() ? <NotLoggedIn /> : <UserLoggedIn />}

            </div>
        </nav>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch({ type: "LOGOUT" }),

    };
};

export default connect(null, mapDispatchToProps)(withRouter(Nav));