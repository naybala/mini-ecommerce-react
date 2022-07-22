import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loader from "../LoaderPage/Loader";
import "./PaginateStyle.css";

function List() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const perPage = 6;
    const pageShow = pageNumber * perPage;

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
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
            {
                loader ? <Loader />
                    :
                    <Fragment>
                        <div className="container">
                            <div className='flex-container'>
                                {
                                    data.slice(pageShow, pageShow + perPage).map(d => (
                                        <div className='small-container'>
                                            <div className='inner-container d-flex align-items-center'>
                                                <img src={d.image} alt="" className='img-img-thumbnail w-50 rounded-2 image' />
                                            </div>
                                            <div className='inner-container mt-md-5'>
                                                <h5 className="card-title">{d.title}</h5>
                                                <p className="text-danger">price - {d.price} $</p>
                                                <p className="text-primary">category - {d.category}</p>
                                                <button className='btn btn-primary'>Add To Cart</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
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