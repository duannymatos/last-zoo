import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { userLoggedIn } from "../../../redux/actions/login-actions";
import CREDS from "../../login/credentials";
import NewForm from "./new-form-component";

const New = (props) => {

    const [addForm, setNew] = useState({});


    const submitNew = (e) => {

        e.preventDefault();

        (async _ => {

            let PATH = (CREDS.HOST + `/${props.data.formReducer.result}`)

            try {
                const addNewResult = await axios.post(PATH, addForm, CREDS.CONFIG);
                props.history.push("/zoo");
                alert(addNewResult.data)

            } catch (error) {
                console.error(error)
            }
        })();

    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setNew({ ...addForm, [inputField]: inputValue });
    }


    let name = (props.data.formReducer.result);

    return (
        <div>
            <h3 className="login-please">{`Enter New ${name.charAt(0).toUpperCase() + name.slice(1)}`}</h3>
            <NewForm
                onSubmit={submitNew}
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
    return {
        data: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(New));

