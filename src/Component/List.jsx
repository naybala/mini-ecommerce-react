import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";
import "./PaginateStyle.css";

function List() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const perPage = 5;
    const pageShow = pageNumber * perPage;

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then((res) => {
                const data = res.data;
                setData(data);
                setLoader(false);
            })
    }, []);

    const pageCount = Math.ceil(data.length / perPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            {loader ? <Loader />
                :
                <Fragment>
                    <h1 className="text-center">Mini Ecommerce</h1>
                    <br />
                    {
                        data.slice(pageShow, pageShow + perPage).map(d => (
                            <div className="container bg-light rounded-3">
                                <div className="card border-0 rounded-2">
                                    <div className="card-header border-0 fw-bold" style={{ color: "#61DAFB" }}>
                                        ID : {d.id}
                                    </div>
                                    <div className="card-body">
                                        {d.title}
                                        <div className="mt-2">
                                            {d.completed ?
                                                <span className="badge rounded-pill text-bg-primary fs-6">Success</span>
                                                :
                                                <span className="badge rounded-pill text-bg-danger fs-6">Failure</span>}
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))
                    }
                    <br />
                    <div className="container text-center">
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Fragment>
            }
        </>

    )
}
export default List;