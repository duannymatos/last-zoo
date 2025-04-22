import React from "react";
import FormInput from "../../common/form-input-component";
import { connect } from "react-redux";

const NewForm = (props) => {

    let selectedName = props.data.result;

    switch (selectedName) {
        case ("exhibits"):
            return (
                <section className="container-fluid">
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-3">
                            <form className="dashboard-form">
                                <div className="form-group">

                                    <FormInput name="zookeeper" onChange={props.onChange}></FormInput>

                                    <button className="btn btn-primary btn-block" onClick={props.onSubmit}>Submit</button>

                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            )

        case ("animals"):
            return (
                <section className="container-fluid">
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-3">
                            <form className="dashboard-form">
                                <div className="form-group">

                                    <FormInput name="name" onChange={props.onChange}></FormInput>

                                    <FormInput name="commonname" onChange={props.onChange}></FormInput>

                                    <FormInput name="sciname" onChange={props.onChange}></FormInput>

                                    <FormInput name="exhibit" onChange={props.onChange}></FormInput>

                                    <button className="btn btn-primary btn-block" onClick={props.onSubmit}>Submit</button>

                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            )

        case ("zookeepers"):
            return (
                <section className="container-fluid">
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-3">
                            <form className="dashboard-form">
                                <div className="form-group">

                                    <FormInput name="firstname" onChange={props.onChange}></FormInput>

                                    <FormInput name="lastname" onChange={props.onChange}></FormInput>

                                    <button className="btn btn-primary btn-block" onClick={props.onSubmit}>Submit</button>

                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            )


        default:
            return
    }


}

function mapStateToProps(state) {
    return {
        data: state.formReducer

    };
}

export default connect(mapStateToProps)(NewForm);