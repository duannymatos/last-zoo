import React from "react";
import { searchSelected } from "../../redux/actions/search-actions";
import { connect } from "react-redux";

const Nav = (props) => {

    return (


        < nav className="navbar navbar-expand-lg navbar-dark" >

            <ul className="navbar-nav m-auto">

                <button type="" className="btn " value="exhibits" onMouseDown={() => { props.search("exhibits") }} onClick={props.onSubmitClick}>Exhibits</button>

                <button type="" className="btn " value="animals" onMouseDown={() => { props.search("animals") }} onClick={props.onSubmitClick}>Animals</button>

                <button type="" className="btn " value="zookeepers" onMouseDown={() => { props.search("zookeepers") }} onClick={props.onSubmitClick}>Zookeepers</button>

            </ul >
        </nav >

    )

}

function mapDispatchToProps(dispatch) {
    return {
        search: (data) => dispatch(searchSelected(data)),
    };
};

function mapStateToProps(state) {
    return {
        data: state
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Nav);