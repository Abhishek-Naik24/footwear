import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Sidebar() {
    const navigate = useNavigate();
    function handleLogout() {
        
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('isLogout', true)
                localStorage.removeItem('uname')
                localStorage.removeItem('pass')
                navigate('/adminlogin');
            }
        });
    }
    useEffect(()=>{
        
    },[])
    return (
        <div className="">
            <div className="row">
                <div className="col-lg-2 col-sm-3">
                    <nav id="admin-sidebar">
                        <ul>
                            <li><Link to={"/sidebar/dashboard"}>Dashboard</Link></li>
                            <li><Link to={"/sidebar/add-product"}>Add Product</Link></li>
                            <li><Link to={"/sidebar/products"}>Products</Link></li>
                            <li><Link to={"/sidebar/orderdetails"}>Order Details</Link></li>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-10 col-sm-9">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}
