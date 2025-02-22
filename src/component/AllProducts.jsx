import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { addtocart, setproduct } from '../state/cartSlice'

function AllProducts() {
    const [Product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setsortOrder] = useState([]);


    // product filteration logic
    const filteredProducts = Product.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    // Pagination Logic
    const [currentPage, setcurrentPage] = useState(1)
    const [recordPerPage, setrecordPerPage] = useState(6)

    // creating index for slicing the records
    const lastIndex = currentPage * recordPerPage
    const firstIndex = lastIndex - recordPerPage

    const currentItems = filteredProducts.slice(firstIndex, lastIndex)

    // Creating Pages for Records
    const totalPages = Math.ceil(filteredProducts.length / recordPerPage)
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

    function loadData() {
        axios.get("https://66f7930db5d85f31a34301a2.mockapi.io/Products")
            .then((res) => {
                setProduct(res.data)
                // console.log(Product);

            })
    }
    function handleData(product) {
        const cart = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        }
        dispatch(addtocart(cart));
    }

    function handleProduct(data) {
        const product = {
            id: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
            mrp: data.mrp,
            quantity: 1
        }
        dispatch(setproduct(product))
        navigate('/productdetail')
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        // <div className='container'>
        //     <div className="breadcrumbs">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col">
        //                     <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>All Products</span></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row mt-5">
        //         <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
        //             <h2>View All Products</h2>
        //         </div>
        //     </div>
        //     <div className="row row-pb-md">
        //         {
        //             (Product.length === 0) ? <div className="w-100 text-center"><div className="spinner-border text-primary" role="status"></div></div> 
        //                 :
        //                 Product.map((data, i) => {
        //                     return (
        //                         <div className="col-md-3 col-lg-3 mb-4 text-center" key={i}>
        //                             <div className="product-entry border">
        //                                 <a href="#" className="prod-img">
        //                                     <img src={data.image} className="img-fluid" alt="Free html5 bootstrap 4 template" onClick={() => handleProduct(data)} />
        //                                 </a>
        //                                 <div className="desc">
        //                                     <h2><a href="#">{data.title}</a></h2>
        //                                     <span className="price"><strike>{data.mrp}</strike>₹/-</span>
        //                                     <span className="price">{data.price}₹/-</span>
        //                                 </div>
        //                                 <div className="row">
        //                                     <div className="col-sm-12 text-center">
        //                                         <p className="addtocart"><button className="btn btn-primary btn-addtocart" onClick={() => handleData(data)}><i className="icon-shopping-cart"></i> Add to Cart</button></p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 })
        //         }
        //     </div>
        // </div>
        <div>
            <div className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="col-lg-9">
                                <input className="form-control" type="text" placeholder="Seacrh" fdprocessedid="slqfdt" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-xl-3">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Category</h3>
                                        <ul>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="etlq0h">Male</button></li>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="0rbzzy" >Female</button></li>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="0rbzzy">Kids</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Brand</h3>
                                        <ul>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="mi1sc" >Adidas</button></li>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="d7x55" >Bata</button></li>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="lvpor" >Nike</button></li>
                                            <li><button className="btn p-0 text-secondary" fdprocessedid="6mewb" >Puma</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Size</h3>
                                        <div className="block-26 mb-2">
                                            <h4>Size</h4>
                                            <ul>
                                                <li ><a href="#" >6</a></li>
                                                <li ><a href="#" >7</a></li>
                                                <li ><a href="#" >8</a></li>
                                                <li ><a href="#" >9</a></li>
                                                <li ><a href="#" >10</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Colors</h3>
                                        <ul>
                                            <li><a href="#" >Black</a></li>
                                            <li><a href="#" >White</a></li>
                                            <li><a href="#" >Blue</a></li>
                                            <li><a href="#" >Red</a></li>
                                            <li><a href="#" >Green</a></li>
                                            <li><a href="#" >Grey</a></li>
                                            <li><a href="#" >Orange</a></li>
                                            <li><a href="#" >Cream</a></li>
                                            <li><a href="#" >Brown</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <ul>
                                            <div className="d-grid gap-2 col-12 mx-auto"><button className="btn btn-primary" type="button" fdprocessedid="4rpelm" style={{ backgroundColor: "rgb(136, 200, 188)", color: "black" }} onClick={() => setSearchTerm({ title: '', brand: '', category: '', size: '', color: '' })}>Clear Filter</button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-xl-9">
                            <div className="row row-pb-md">
                                {
                                    (Product.length === 0) ? <div className="w-100 text-center"><div className="spinner-border text-primary" role="status"></div></div> :
                                        (currentItems.length > 0) ?
                                            currentItems.map((data, i) => {
                                                return (
                                                    <div key={data.id} className="col-lg-4 mb-4 text-center">
                                                        <div className="product-entry border">
                                                            <a onClick={() => handleProduct(data)} className="prod-img"><img src={data.image} className="img-fluid" alt="Free html5 bootstrap 4 template" style={{ height: "150px" }} /></a>
                                                            <div className="desc">
                                                                <h2><a href="#">{data.brand} <br /> {data.title}</a></h2>
                                                                <span className="price"><h4>₹{data.price}/-</h4></span>
                                                                <span className="price"><del><h5>₹{data.mrp}/-</h5></del></span>
                                                                <button className="btn btn-primary" fdprocessedid="b0j2a" style={{ color: "black" }} onClick={() => handleData(data)}><i className="icon-shopping-cart"></i> Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) :
                                            ""
                                }
                            </div>
                            {
                                totalPages ?
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <div className="block-27">
                                                <ul>
                                                    <li onClick={handlePrevious} ><a href='#' style={{ cursor: currentPage === 1 ? 'default' : 'pointer' }}><i className="ion-ios-arrow-back"></i></a></li>
                                                    {
                                                        Array.from({ length: totalPages }, (_, index) => (
                                                            <>
                                                                <li key={index} className={currentPage === index + 1 ? 'active' : ''} onClick={() => handlePage(index + 1)}><span>{index + 1}</span></li>
                                                            </>
                                                        ))
                                                    }
                                                    <li onClick={handleNext} ><a href='#' style={{ cursor: currentPage === totalPages ? 'default' : 'pointer' }}><i className="ion-ios-arrow-forward"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts