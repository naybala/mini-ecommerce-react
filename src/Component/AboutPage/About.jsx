import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function About() {
    return (
        <>
            <h1>This is About Page</h1>
            <br />
            <div className="container">
                <Skeleton count={5} />
            </div >
        </>
    )
}
