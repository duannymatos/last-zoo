import React, { useState } from "react";
import LoginForm from "./login-form-component"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";
import { userLoggedIn } from "../../redux/actions/login-actions";
import CREDS from "../login/credentials";

const URL = "/users/login"

const Login = (props) => {

    const [login, setLogin] = useState({});


    const submitLogin = (e) => {

        e.preventDefault();

        (async _ => {

            try {

                const loginResult = await axios.post(CREDS.HOST + URL, login);
                localStorage.setItem("json-token", loginResult.data.token)

                ///// DECODING TOKEN TO GET USER ROLE
                const decoded = jwt.decode(loginResult.data.token);
                const obj = { email: decoded.email, role: decoded.role };
                console.log(obj.role)
                props.onLogin(obj);

                //SENDS USER TO THE ZOO PAGE
                props.history.push("/zoo");
                window.location.reload()


            } catch (err) {
                console.error(err)
            }
        })();


    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setLogin({ ...login, [inputField]: inputValue });
    }

    return (
        <div>
            <LoginForm
                onSubmit={submitLogin}
                onChange={handleChange}
            />
        </div>
    )
};



function mapDispatchToProps(dispatch) {
    return {
        onLogin: (data) => dispatch(userLoggedIn(data)),
    };
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

// const handleSubmit = (e) => {
    //     //Prevents our form submission from sending a request and refreshing the page
    //     e.preventDefault();

    //Make a request with axios to send form data

    // const config = {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: "include",
    // }
    // axios.post("https://cors-anywhere.herokuapp.com/3.14.145.22:8082/users/login", login)
    //     // axios.post("https://cors-anywhere.herokuapp.com/3.14.145.22:8082/users/login", login, { withCredentials: true })
    //     .then((response) => {
    //         console.log(login)
    //     })
    //     .catch((err) => { console.error("Bad request") })

    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // const connect = async () => {
    //     const response = await fetch('http://3.14.145.22:8082/users/login', {
    //         method: 'POST',
    //         mode: 'cors',
    //         // redirect: '/zoo',
    //         credentials: "omit", // Don't forget to specify this if you need cookies
    //         headers: headers,
    //         body: JSON.stringify({
    //             email: login.email,
    //             password: login.password
    //         })
    //     });
    //     const payload = await response.json()
    //     //     console.log(payload);
    //     // }
    //     // connect();


    //     const postAxios = _ => {
    //         return axiosSearch("post", "/users/login", login)
    //     }

    //     const result =
    //         postAxios().then((response) => {

    //             console.log(response.data > 0)
    //             if (response.data[1].length) {

    //                 props.onLogin(response.data)
    //                 console.log(response.data[1][0])
    //                 props.history.push("/zoo")
    //                 // return (props.response.data[1]);
    //             } else {
    //                 // return (response.data[0]);
    //             }
    //         })
    //             .catch((response) => {
    //                 console.log(response.data)
    //             })
    // };