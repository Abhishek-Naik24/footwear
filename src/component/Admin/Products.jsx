import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setdata } from '../../state/cartSlice'
import Swal from 'sweetalert2'
function Products() {
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Pagination Logic
    const [currentPage, setcurrentPage] = useState(1)
    const [recordPerPage, setrecordPerPage] = useState(5)

    // creating index for slicing the records
    const lastIndex = currentPage * recordPerPage
    const firstIndex = lastIndex - recordPerPage

    const currentItems = data.slice(firstIndex, lastIndex)

    // Creating Pages for Records
    const totalPages = Math.ceil(data.length / recordPerPage)
    // console.log(totalPages);

    function handlePrevious() {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
        }
    }

    function handleNext() {
        if (currentPage < totalPages) {
            setcurrentPage(currentPage + 1)
        }
    }

    function handlePage(PageNo) {
        setcurrentPage(PageNo)
    }


    function handleGet() {
        axios.get("https://66f7930db5d85f31a34301a2.mockapi.io/Products")
            .then((res) => {
                setData(res.data);
                // console.log(data);

            })
    }

    function handleEdit(data) {
        dispatch(setdata(data));
        navigate('/sidebar/add-product')
    }

    function handleDelete(id) {
        // const response = window.confirm("Are You Sure?");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("https://66f7930db5d85f31a34301a2.mockapi.io/Products/" + id)
                    .then(() => {
                        handleGet();
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    icon: "error"
                });
            }
        });
    }

    useEffect(() => {
        handleGet();
    }, [])
    return (
        <div>
            <div className="breadcrumbs">
                <div className="row">
                    <div className="col">
                        <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Products</span></p>
                    </div>
                </div>
            </div>
            <div className="row row-pb-lg mt-2">
                {/* <label className='col-lg-2'>
                    <select class="form-select" name="per-page" onChange={(e)=>setrecordPerPage(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected="">10</option>
                        <option value="15">15</option>
                        <option value="-1">All</option>
                    </select> 
                     entries per page
                </label> */}
                <div className="col-md-12 mt-2">
                    <div className="product-name d-flex">
                        <div className="one-forth text-left px-4">
                            <span>Product Details</span>
                        </div>
                        <div className="one-eight text-center">
                            <span>Category</span>
                        </div>
                        <div className="one-eight text-center">
                            <span>MRP</span>
                        </div>
                        <div className="one-eight text-center">
                            <span>Price</span>
                        </div>
                        <div className="one-eight text-center px-4">
                            <span>Action</span>
                        </div>
                    </div>
                    {
                        currentItems.map((data, i) => {
                            return (
                                <div className="product-cart d-flex" key={data.id}>
                                    <div className="one-forth">
                                        <img className="product-img" src={data.image} alt='This'></img>
                                        <div className="display-tc">
                                            <h3>{data.title}</h3>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <span className="price">{data.category}</span>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <span className="price"><strike>{data.mrp}₹/-</strike></span>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <span className="price">{data.price}₹/-</span>
                                        </div>
                                    </div>
                                    <div className="one-eight text-center">
                                        <div className="display-tc">
                                            <div className="d-flex justify-content-around">
                                                <button className="btn btn-danger " onClick={() => handleDelete(data.id)}><i className="fa-solid fa-trash-can" ></i></button>
                                                <button className='btn btn-primary' onClick={() => handleEdit(data)}><i className="fa-regular fa-pen-to-square"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                {
                    totalPages ?
                        <div className="d-flex justify-content-between align-items-center">
                            <div class="datatable-info">Showing {firstIndex + 1} to {lastIndex > currentItems.length ? firstIndex + currentItems.length : lastIndex} of {data.length} entries</div>
                            <nav aria-label="Page navigation" className=''>
                                <ul class="pagination">
                                    <li class={currentPage === 1 ? "page-item disabled" : "page-item"} onClick={handlePrevious} >
                                        <a class="page-link" href="#" aria-label="Previous" >
                                            &laquo;
                                        </a>
                                    </li>
                                    {
                                        Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className={currentPage === index + 1 ? 'page-item active' : 'page-item'} onClick={() => handlePage(index + 1)} >
                                                <a class="page-link" href="#">{index + 1}</a>
                                            </li>
                                        ))
                                    }
                                    <li class={currentPage === totalPages ? "page-item disabled" : "page-item"} onClick={handleNext}>
                                        <a class="page-link" href="#" aria-label="Next">
                                            &raquo;
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        : ''
                }

            </div>
        </div>
    )
}

export default Products