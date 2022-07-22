import React from 'react'
import './Cart.css'
export default function Cart(props) {
    return (
        <>
            <div className="container">
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Sub Amount</th>
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
                                        <button className='btn btn-sm btn-primary me-2 d-inline-block'><i class="bi bi-dash-circle-fill"></i></button>
                                        <button className='btn btn-sm btn-primary'><i class="bi bi-plus-circle-fill"></i></button>
                                    </td>
                                    <td><button className='btn btn-danger'>remove <i class="bi bi-trash3-fill"></i></button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}