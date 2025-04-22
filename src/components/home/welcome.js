import React from "react"

export const Welcome = () => {

    return (


        <section class="section-welcome">
            <div className="container-fluid">
                <div className="justify-content-center">
                    <h2>Welcome to Last wildlife</h2>
                    <p className="long-copy col col-12">This project was built by <em><strong>Duanny Matos </strong></em>and <em><strong>Eric last.</strong></em><br />
                    Eric was responsible for developing this backend with a powerful RESTful API architecture while Duanny delivered a minimalist, yet modern frontend design.<br />
                    This application is responsive to many different screen resolutions so everyone can enjoy it.</p>
                </div>

                <div className="row welcome-texts">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <i className="icon icon-big">{<ion-icon name="code-slash" id="text-white ionicon-dashboard"></ion-icon>}</i>
                        <h3>Leading technology</h3>
                        <p> This application was built using leading edge technology. The server-side was built using a powerful RESTful
                        API with Node/Express and the frontend was developed with a SPA architecture with React and Redux.
                    </p>
                    </div>


                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <i className="icon icon-big">{<ion-icon name="repeat" id="text-white ionicon-dashboard"></ion-icon>}</i>
                        <h3>Dynamic Elements</h3>
                        <p> This application was developed to be as dynamic as possible. Components render individually instead of full page reload.
                            The URI <strong>/zoo</strong> will display the available tables for <strong>Exhibits, Animals</strong> and <strong>Zookeepers</strong>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">

                        <i className="icon icon-big">{<ion-icon name="git-network" id="text-white ionicon-dashboard"></ion-icon>}</i>
                        <h3>User Control</h3>
                        <p> In order for users to be able to see the available <strong>Exhibits, Animals</strong> and <strong>Zookeepers</strong>,
                        they must be logged in. User must enter <strong>username</strong> and <strong>password</strong>. Users are categorized as
                        users and admins. Only admins are allowed to access the admin dashboard.</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <i className="icon icon-big">{<ion-icon name="terminal" id="text-white ionicon-dashboard"></ion-icon>}</i>
                        <h3>Admin Dashboard</h3>
                        <p> When an admin logs in, one is able to access the dashboard to add new Exhibits, Animals and Zookeepers.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}