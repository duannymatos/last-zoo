import React from "react";
import PropTypes from "prop-types";
import TitleCase from "./title-case-component"

export default function FormInput(props) {
    return (
        <div>
            <label htmlFor={props.name}><TitleCase content={props.name}></TitleCase></label>
            <input id={props.name}
                name={props.name}
                className={props.className || "form-control"}
                placeholder={props.placeholder || `Enter ${props.name}`}
                type={props.type || "text"}
                onChange={props.onChange}
            />
        </div>
    );
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};