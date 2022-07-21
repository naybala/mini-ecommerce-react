import React from "react";
import Img1 from "./../asset/gif/gearIcon.gif";
import "./Loader.css";
function Loader() {
    return (
        <div class="container d-flex justify-content-center align-items-center">
            <div className="img-top">
                <img src={Img1} alt="" className="img-fluid" />
            </div>
        </div >
    )
}

export default Loader;