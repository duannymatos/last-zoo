import React, { useState, useEffect } from "react";
import Nav from "../nav/nav-search";
import SearchForm from "../search/search-form-component";
import { connect } from "react-redux";
import axios from "axios";
import { loadAnimals } from "../../redux/actions/animals-actions";
import GenericTable from "../common/generic-table-component";
import { withRouter } from "react-router-dom";

const Search = (props) => {

    const [url, setUrl] = useState("");
    const [id, setSearch] = useState(0)

    const printTable = () => {

        let table = props.data.animalsReducer.animalResult;

        if (table.length) {
            return table
        } else {
            return ([table])
        }
    }


    const submitUrl = (e) => {

        setUrl(props.data.searchReducer.result);

        setSearch(id);

        e.preventDefault();
    }

    let PATH = () => {
        if (id.search > 0) {
            return `http://18.224.170.154:8082/${url}/${id.search}`
        } else {
            return `http://18.224.170.154:8082/${url}`
        }
    }


    useEffect(() => {

        axios.get(PATH(), {
            headers: {
                'x-access-token': localStorage.getItem("json-token")
            }
        })
            .then((results) => {
                props.getAnimals(results.data)
            }).catch((err) => {
                console.error(err);
            });

    }, [url, id]);


    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setSearch({ ...id, [inputField]: inputValue });
    }


    return (

        <div className="row justify-content-center">
            <Nav
                onSubmitClick={submitUrl}
            />

            <SearchForm
                onSubmit={submitUrl}
                onChange={handleChange}
            />

            <div className="card search-table-card">
                <GenericTable records={printTable()}></GenericTable> {/***** TABEL ******/}
            </div>
        </div>
    );

};

function mapDispatchToProps(dispatch) {
    return {

        getAnimals: (data) => dispatch(loadAnimals(data)),
    };
};

function mapStateToProps(state) {
    return {
        data: state

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));