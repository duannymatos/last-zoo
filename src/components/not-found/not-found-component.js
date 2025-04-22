import React from "react"

const NotFound = () => {
    return (
        <div className="text-center">
            <h4 className="text-secundary">404 - Not found</h4>
            <img src="https://image.flaticon.com/icons/svg/42/42901.svg"
                alt="Sad Face"
                width="300px"
                style={{ opacity: 1 }} />

            <p>We are sorry, there is no content for thie requested URL</p>
        </div>
    );
};

export default NotFound;