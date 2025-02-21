import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import { addForm } from '../../state/formSlice'

const OrderDetails = () => {
    const userDetails = useSelector((state) => state.form.formdetails)
    const Product = userDetails.length > 0 ? userDetails[0].product : []
    const dispatch = useDispatch()
    const contentRef = useRef(null)
    const [Order, setOrder] = useState([])
    // const { Orders, Products,userDetail } = Orderdetails

    function handleView(data) {
        dispatch(addForm(Order.filter((item) => item.id === data.id)))
        console.log(userDetails);


        // let Obj = {
        //     id: data.id,
        //     total: data.total
        // }

        // axios.get("https://66f7930db5d85f31a34301a2.mockapi.io/UserData/" + Obj.id)
        //     .then((res) => {
        //         // console.log(res.data.product);
        //         setOrderdetails({ ...Orderdetails, userDetail: [res.data], Products: res.data.product, Total: Obj.total })
        //         console.log("componentRef:", componentRef.current);
        //     })

    }
    
    const generatePDF = useReactToPrint({
        contentRef,
        documentTitle:'Hello',
        // onAfterPrint:alert("Saved!")   
    });

    useEffect(() => {
        axios.get("https://66f7930db5d85f31a34301a2.mockapi.io/UserData")
            .then((res) => {
                setOrder(res.data)
                // console.log(Orders);
            })

    }, [])
    return (
        <div>
            <div className="mt-4">
                <h3>Orders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>SubTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (setTimeout(() => Order.length > 0), 500) ?
                                Order.map((data, i) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>{i + 1}</td>
                                            <td>{data.fname} {data.lname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phno}</td>
                                            <td>₹{data.total}/-</td>
                                            <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" fdprocessedid="rk86x" style={{ backgroundColor: "rgb(136, 200, 188)", color: "black" }} onClick={() => handleView(data)}>View</button></td>
                                        </tr>
                                    )
                                })
                                : <div className="alert alert-warning text-center mt-4" role="alert">
                                    <i className="bi bi-exclamation-triangle"></i> No Records Found !
                                </div>
                        }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "1000px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Selected Order</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                // userDetail.length === 0 ? <div className="w-100 text-center"><div class="spinner-border text-primary" role="status"></div></div> :
                                <div className="p-4 border w-full" ref={contentRef}>
                                    <div className="container mt-5 bg-light p-4" id="invoice">
                                        {
                                            userDetails.map((data, i) => (
                                                <div key={data.id}>
                                                    <h3 className="text-center">Invoice</h3>
                                                    <p><strong>Name:</strong> {data.fname} {data.lname}</p>
                                                    <p><strong>Email:</strong> {data.email}</p>
                                                    <p><strong>Mobile:</strong> {data.phno}</p>
                                                    <p><strong>Address:</strong> {data.address}, {data.city}, {data.state} - {data.zip}, {data.country}</p>
                                                </div>
                                            ))
                                        }

                                        <h5>Order Details</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Product.map((data, i) => (
                                                        <tr key={data.id}>
                                                            <td>{i + 1}</td>
                                                            <td>
                                                                <img src={data.image} alt={data.title} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                                                                {data.title}
                                                            </td>
                                                            <td>₹{data.price}/-</td>
                                                            <td>{data.quantity}</td>
                                                            <td>₹{data.price * data.quantity}/-</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <h5 className="text-right">SubTotal: ₹{userDetails.length > 0 ? userDetails[0].total : ''}/-</h5>
                                    </div>
                                </div>
                            }

                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button className="btn btn-success" onClick={generatePDF}>Print Invoice</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{ backgroundColor: "rgb(136, 200, 188)", color: "black" }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails