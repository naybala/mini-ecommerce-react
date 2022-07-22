import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./Loader.css"
function Loader() {
    return (
        <div class="container">
            <Skeleton count={6} className="size" />
        </div >
    )
}

export default Loader;