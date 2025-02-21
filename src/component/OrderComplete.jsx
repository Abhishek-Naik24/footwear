import React from 'react'
import { Link } from 'react-router-dom'

function OrderComplete() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-10 offset-sm-1 text-center">
                    <p className="icon-addcart"><span><i className="icon-check"></i></span></p>
                    <h2 className="mb-4">Thank you for purchasing, Your order is complete</h2>
                    <p>
                        <Link to={'/'} className="btn btn-primary btn-outline-primary">Home</Link>
                        <Link to={'/products'} className="btn btn-primary btn-outline-primary"><i className="icon-shopping-cart"></i> Continue Shopping</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderComplete