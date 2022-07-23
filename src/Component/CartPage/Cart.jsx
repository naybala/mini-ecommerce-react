import React from 'react'
import './Cart.css'
export default function Cart(props) {

    const minus = (product) => {
        props.setCart((prevState) => prevState.map((d) => {
            if (d.id === product.id) {
                if (d.qty !== 1) {
                    var updateQty = d.qty - 1;
                    return { ...d, qty: updateQty };
                } else {
                    d.qty = 1;
                }
            }
            return d;
        })
        )
    }

    const plus = (product) => {
        props.setCart((prevState) => prevState.map((d) => {
            if (d.id === product.id) {
                var updateQty = d.qty + 1;
                return { ...d, qty: updateQty };
            }
            return d;
        })
        );
    }

    const remove = (product) => {
        console.log("hello");
    }


    return (
        <>
            <div className="container">
                <table className="table table-dark table-striped table-hover border-2">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Sub Amount</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.map((d) => (
                                <tr key={d.id}>
                                    <th>{d.title}</th>
                                    <td>{d.price} $</td>
                                    <td>{d.qty}</td>
                                    <td>{d.qty * d.price} $</td>
                                    <td >
                                        <button onClick={() => minus(d)} className='btn btn-sm btn-primary me-2 d-inline-block'><i className="bi bi-dash-circle-fill"></i></button>
                                        <button onClick={() => plus(d)} className='btn btn-sm btn-primary'><i className="bi bi-plus-circle-fill"></i></button>
                                    </td>
                                    <td><button onClick={() => remove(d)} className='btn btn-danger'>remove <i className="bi bi-trash3-fill"></i></button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}