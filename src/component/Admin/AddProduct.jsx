import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setdata } from '../../state/cartSlice';
import Swal from 'sweetalert2';
function AddProduct() {
    const data = useSelector((state) => state.cart.data)
    // console.log(data);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [Product, setProduct] = useState({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: "",
        brand: "",
        color: "",
        size: "",
        detail: ""
    })

    const [isDisable, setisDisable] = useState(false)

    function handleChange(e) {
        setProduct({ ...Product, [e.target.name]: e.target.value });
        console.log(Product);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let validated = true;
        if (Product.title === '') {
            validated = false;
        }
        if (Product.category === '') {
            validated = false;
        }
        if (Product.price === '') {
            validated = false;
        }
        if (Product.mrp.trim === '') {
            validated = false;
        }
        if (Product.image.trim === '') {
            validated = false;
        }
        if (Product.brand.trim === '') {
            validated = false;
        }
        if (Product.color.trim === '') {
            validated = false;
        }
        if (Product.size.trim === '') {
            validated = false;
        }
        if (Product.detail.trim === '') {
            validated = false;
        }
        if (validated) {
            setisDisable(true)
            if (data === null) {
                axios.post("https://66f7930db5d85f31a34301a2.mockapi.io/Products", Product)
                    .then(() => {
                        // console.log(res.data);
                        Swal.fire({
                            icon: "success",
                            title: "Product Added Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setisDisable(false)
                    })
            }
            else {
                axios.put("https://66f7930db5d85f31a34301a2.mockapi.io/Products/" + data.id, Product)
                    .then(() => {
                        dispatch(setdata(null));
                        Swal.fire({
                            icon: "success",
                            title: "Product Updated!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setisDisable(false)
                        navigate('/sidebar/products')
                    })
            }
            setProduct({
                title: "",
                category: "",
                price: "",
                mrp: "",
                image: "",
                brand: "",
                color: "",
                size: "",
                detail: ""
            })
        }
        else {
            Swal.fire({
                title: "All Fields are Mandetory!",
                // text: "All Fields are Mandetory!",
                icon: "warning"
            });
        }

    }

    function handleClear() {
        setProduct({
            title: "",
            category: "",
            price: "",
            mrp: "",
            image: "",
            brand: "",
            color: "",
            size: "",
            detail: ""
        })
    }

    function handleCancel() {
        // let confirm = window.confirm('Are You Sure?')
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, cancel!",
            cancelButtonText: "No!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setdata(null));
                setProduct({
                    title: "",
                    category: "",
                    price: "",
                    mrp: "",
                    image: "",
                    brand: "",
                    color: "",
                    size: "",
                    detail: ""
                })
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    function loaddata() {
        setProduct(data);
    }

    useEffect(() => {
        if (data !== null) {
            loaddata();
        }
    }, [])
    return (
        <div>
            <div className="breadcrumbs">
                <div className="row">
                    <div className="col">
                        <p className="bread"><span><Link to={'/sidebar'}>ADMIN</Link></span> / <span>Add Products</span></p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <label className='mb-3'>
                        Title
                        <input onChange={handleChange} value={Product.title} name='title' type="text" className='form-control mt-2' />
                    </label>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <label className='mb-3'>
                                Price
                                <input onChange={handleChange} value={Product.price} name='price' type="text" className='form-control mt-2' />
                            </label>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <label className='mb-3'>
                                MRP
                                <input onChange={handleChange} value={Product.mrp} name='mrp' type="text" className='form-control mt-2' />
                            </label>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <label className='mb-3'>
                                Brand
                                <input onChange={handleChange} value={Product.brand} name='brand' type="" className='form-control mt-2' />
                            </label>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <label className='mb-3'>
                                Color
                                <input onChange={handleChange} value={Product.color} name='color' type="text" className='form-control mt-2' />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <label className='mb-3'>
                        Category
                        <select onChange={handleChange} value={Product.category} name='category' type="text" className='form-control mt-2'>
                            <option value="">Select Option</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                            <option value="Adults">Adults</option>
                        </select>
                    </label>
                    <div className="row">
                        <div className="col-lg-12 col-sm-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className='mb-3'>
                                        Image
                                        <input onChange={handleChange} value={Product.image} name='image' type="url" className='form-control mt-2' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label className='mb-3'>
                                Size
                                <input onChange={handleChange} value={Product.size} name='size' type="text" className='form-control mt-2' />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <label>
                        Description
                        <textarea onChange={handleChange} value={Product.detail} name='detail' className='d-block w-100 form-control mt-2' />
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-around align-item-center addproduct mt-2">
                <input type="submit" value={data ? 'Update' : 'Create'} name="" id="" className='btn btn-success' onClick={handleSubmit} disabled={isDisable} />
                <input type='reset' value={data == null ? 'Clear' : 'Cancel'} name="" id="" className='btn btn-danger' onClick={data == null ? handleClear : handleCancel} />
            </div>

        </div>

    );
}

export default AddProduct;