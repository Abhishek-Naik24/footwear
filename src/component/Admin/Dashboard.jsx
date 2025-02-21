import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="row">
                    <div className="col">
                        <p className="bread"><span><Link to={'/sidebar'}>ADMIN</Link></span> / <span>Add Products</span></p>
                    </div>
                </div>
            </div>
            <div className='dash-body'>
                <div className="card">
                    <i className="icon fas fa-users"></i>
                    <div>Users</div>
                    <button className="button">Users</button>
                </div>
                <div className="card">
                    <i className="icon fas fa-shopping-bag"></i>
                    <div>Products</div>
                    <Link to={'/sidebar/products'}><button className='button'>Products</button></Link>
                </div>
                <div className="card">
                    <i className="icon fas fa-store"></i>
                    <div>Orders</div>
                    <Link to={'/sidebar/orderdetails'}><button className="button">Orders</button></Link>
                </div>
            </div>
        </>
    )
}
