import React from "react"
import Header from "./header-documentation"
import Nav from "./nav-documentation"


export const Documentation = () => {


    return (

        <section className="section-documentation">
            <div className="row">
                <div className="col-6">
                    <div className="container left-container float-left padding-0">
                        <Header>
                        </Header>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container right-container float-right padding-0">

                        <div className="documentation-text">
                            <div className="row justify-content-center"><h3 ><strong>Navigation Bar</strong></h3></div>
                            <p>The navigation bar is dynamic and will change according to the user status.
                                If user is not logged in, user will only see Home, Zoo and login.<br />

                                If user is logged in as admin, Dashboard will be available.
                        </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}