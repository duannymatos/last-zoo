import React from "react";
import SearchFormInput from "../common/search-form-input-component";
import { connect } from "react-redux"

const SearchForm = (props) => {

    return (
        <section className="container-fluid">
            <section className="row">
                <section className="col-12">
                    <div className="container">
                        <div className="input-group justify-content-center">
                            <SearchFormInput type="text" className="form-control" name="search" onChange={props.onChange} placeholder={`Search for ${props.data.searchReducer.result}`}></SearchFormInput>

                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        data: state
    };
}

export default connect(mapStateToProps)(SearchForm);