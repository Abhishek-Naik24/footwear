import React, { useEffect, useState } from 'react'
import person1 from '../assets/img/person1.jpg';
import person2 from '../assets/img/person2.jpg';
import person3 from '../assets/img/person3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../state/cartSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
    // const cart = useSelector((state) => state.cart.cartProducts);
    const [Data, setData] = useState([])
    let obj = useSelector((state) => state.cart.product)
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    useEffect(() => {
        console.log(Data.length);
        
        if (obj) {
            axios.get("https://66f7930db5d85f31a34301a2.mockapi.io/Products/" + obj.id)
                .then((res) => {
                    setData([res.data])
                    // console.log([res.data]);

                })
        }
        else {
            navigate('/allproducts')
        }
    }, [])
    return (
        <div>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p class="bread"><span><a href="index.html">Home</a></span> / <span>Product Details</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {
                (Data.length===0) ? <div className="colorlib-loader"></div> :
                Data.map((echData, i) => {
                    return (
                        <>
                            <div class="colorlib-product" key={i}>
                                <div class="container">
                                    <div class="row row-pb-lg product-detail-wrap">
                                        <div class="col-sm-8">
                                            <div class="owl-carousel">
                                                <div class="item">
                                                    <div class="product-entry border">
                                                        <a href="#" class="prod-img">
                                                            <img src={echData.image} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="product-desc">
                                                <h3>{echData.title}</h3>
                                                <p class="price">
                                                    <span>MRP - <strike>{echData.mrp}</strike>₹/-</span>
                                                    <span>Price - {echData.price}₹/-</span>
                                                    <span class="rate">
                                                        <i class="icon-star-full"></i>
                                                        <i class="icon-star-full"></i>
                                                        <i class="icon-star-full"></i>
                                                        <i class="icon-star-full"></i>
                                                        <i class="icon-star-half"></i>
                                                        (74 Rating)
                                                    </span>
                                                </p>
                                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                <div class="size-wrap">
                                                    <div class="block-26 mb-2">
                                                        <h4>Size</h4>
                                                        <ul>
                                                            <li><a href="#">{echData.size}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="block-26 mb-4">
                                                        <h4>Width</h4>
                                                        <ul>
                                                            <li><a href="#">M</a></li>
                                                            <li><a href="#">W</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12 text-center">
                                                        <p class="addtocart"><button class="btn btn-primary btn-addtocart" onClick={() => handleData(echData)}> Add to Cart</button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="row">
                                                <div class="col-md-12 pills">
                                                    <div class="bd-example bd-example-tabs">
                                                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Description</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Manufacturer</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Review</a>
                                                            </li>
                                                        </ul>

                                                        <div class="tab-content" id="pills-tabContent">
                                                            <div class="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                                <ul>
                                                                    <li>The Big Oxmox advised her not to do so</li>
                                                                    <li>Because there were thousands of bad Commas</li>
                                                                    <li>Wild Question Marks and devious Semikoli</li>
                                                                    <li>She packed her seven versalia</li>
                                                                    <li>tial into the belt and made herself on the way.</li>
                                                                </ul>
                                                            </div>

                                                            <div class="tab-pane border fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                            </div>

                                                            <div class="tab-pane border fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                                                <div class="row">
                                                                    <div class="col-md-8">
                                                                        <h3 class="head">23 Reviews</h3>
                                                                        <div class="review">
                                                                            <div class="user-img" style={{ backgroundImage: `url(${person1})` }}></div>
                                                                            <div class="desc">
                                                                                <h4>
                                                                                    <span class="text-left">Jacob Webb</span>
                                                                                    <span class="text-right">14 March 2018</span>
                                                                                </h4>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-half"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                    </span>
                                                                                    <span class="text-right"><a href="#" class="reply"><i class="icon-reply"></i></a></span>
                                                                                </p>
                                                                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="review">
                                                                            <div class="user-img" style={{ backgroundImage: `url(${person2})` }}></div>
                                                                            <div class="desc">
                                                                                <h4>
                                                                                    <span class="text-left">Jacob Webb</span>
                                                                                    <span class="text-right">14 March 2018</span>
                                                                                </h4>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-half"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                    </span>
                                                                                    <span class="text-right"><a href="#" class="reply"><i class="icon-reply"></i></a></span>
                                                                                </p>
                                                                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="review">
                                                                            <div class="user-img" style={{ backgroundImage: `url(${person3})` }}></div>
                                                                            <div class="desc">
                                                                                <h4>
                                                                                    <span class="text-left">Jacob Webb</span>
                                                                                    <span class="text-right">14 March 2018</span>
                                                                                </h4>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-half"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                    </span>
                                                                                    <span class="text-right"><a href="#" class="reply"><i class="icon-reply"></i></a></span>
                                                                                </p>
                                                                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <div class="rating-wrap">
                                                                            <h3 class="head">Give a Review</h3>
                                                                            <div class="wrap">
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        (98%)
                                                                                    </span>
                                                                                    <span>20 Reviews</span>
                                                                                </p>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        (85%)
                                                                                    </span>
                                                                                    <span>10 Reviews</span>
                                                                                </p>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        (70%)
                                                                                    </span>
                                                                                    <span>5 Reviews</span>
                                                                                </p>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        (10%)
                                                                                    </span>
                                                                                    <span>0 Reviews</span>
                                                                                </p>
                                                                                <p class="star">
                                                                                    <span>
                                                                                        <i class="icon-star-full"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        <i class="icon-star-empty"></i>
                                                                                        (0%)
                                                                                    </span>
                                                                                    <span>0 Reviews</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default ProductDetail