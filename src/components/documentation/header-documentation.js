import React from "react";
import Nav from "./nav-documentation";
import CREDS from "../login/credentials";



const Header = () => (

    <header>
        <div className="App-header-documentation">
            <header>
                <Nav></Nav>
            </header>
        </div>
    </header>
);

const AuthHeader = () => {

    if (localStorage.getItem(CREDS.TOKENKEY)) {

        return (<Header />);
    } else {

        return (
            <div className="App-header">
                <Nav></Nav>
            </div>
        );

    }

}

// const mapStateToProps = state => {
//     return {
//         user: state.result
//     };
// }


export default AuthHeader;