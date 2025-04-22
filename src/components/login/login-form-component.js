import React from "react";
import FormInput from "../common/form-input-component";
import Nav from "../nav/nav-head"

const LoginForm = (props) => {
    return (
        <section className="login-container container-fluid">
            <Nav></Nav>
            <section className="row justify-content-center">
                <section className="login-form col-lg-3 col-md-3 col-sm-3 ">
                    <form className="form-container">
                        <div className="form-group">

                            <h3 className="login-please">Please Login!</h3>

                            <FormInput name="username" onChange={props.onChange}></FormInput>

                            <small id="emailHelp" className="form-text text-muted">We will never willingly share your information with anyone.</small>

                            <FormInput type="password" name="password" onChange={props.onChange}></FormInput>

                            <button className="btn btn-primary btn-block" onClick={props.onSubmit}>Submit</button>

                        </div>
                    </form>
                </section>
            </section>
        </section>
    )
}

export default LoginForm;