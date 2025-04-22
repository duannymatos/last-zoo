import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import New from "./content/new-component"
import { formSelected } from "../../redux/actions/form-actions"


class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isToggled: true,
            isSelected: "exhibits"
        }
    }



    submitLogout(e) {
        localStorage.clear();
    }

    render() {

        const isOn = this.state.isToggled;

        return (

            <div className="container-fluid container-dashboard">
                <div className="row justify-content-center">
                    <div className="card text-center dashboard-card">
                        <div className="card-header">
                            <button className="btn btn-success float-left" id="menu-toggle" onClick={() => this.setState({ isToggled: !isOn })}>Toggle Menu</button>
                            <ul className="nav nav-pills card-header-pills float-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/zoo">Zoo</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { this.props.onLogout(); this.submitLogout() }} href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div id="wrapper" className={isOn ? "menuDisplayed" : "NOCLASS"}>
                                {/**************************Sidebar***********************/}
                                <div id="sidebar-wrapper">

                                    <ul className="sidebar-nav">
                                        <li>
                                            {<ion-icon name="images" id="text-white ionicon-dashboard"></ion-icon>}
                                            <Link className="text-white" onClick={() => this.props.form("exhibits")}>Add Exhibits</Link>
                                        </li>

                                        <li>
                                            {<ion-icon name="paw-sharp" id="text-white ionicon-dashboard"></ion-icon>}
                                            <Link className="text-white" onClick={() => this.props.form("animals")}>Add Animals</Link>
                                        </li>

                                        <li>
                                            {<ion-icon name="person-add-sharp" id="text-white ionicon-dashboard"></ion-icon>}
                                            <Link className="text-white" onClick={() => this.props.form("zookeepers")}>Add Zookeepers</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="page-content-wrapper">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <New selectedName={this.state.isSelected} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        form: (data) => dispatch(formSelected(data)),
        onLogout: data => dispatch({ type: "LOGOUT" })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));