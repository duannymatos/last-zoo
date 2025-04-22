import React from "react";
import PropTypes from "prop-types";

export default function SearchFormInput(props) {
    return (
        <div className="form-group">
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

SearchFormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};