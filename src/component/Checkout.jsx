import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { yup } from './yup'
import Swal from 'sweetalert2'
import { EmptyCart } from '../state/cartSlice'
import axios from 'axios'

function Checkout() {
    let dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cartProducts)
    const Amount = useSelector((state) => state.cart.totalAmount)
    const [Data, setData] = useState({
        country: '',
        fname: '',
        lname: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phno: '',
        isCheck: false
    })
    const [checked, setChecked] = useState(false)
    const [dataError, setdataError] = useState({
        country: '',
        fname: '',
        lname: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phno: ''
    })
    const navigate = useNavigate();
    // const {handleChange , handleSubmit, values,errors} = useFormik({
    //     initialValues:{
    //         fname:'',
    //         lname:'',
    //         address:'',
    //         city:'',
    //         state:'',
    //         zip:'',
    //         email:'',
    //         phno:''
    //     },
    //     validationSchema:yup,
    //     onSubmit:(values)=>{
    //         console.log(values); 
    //     }
    // })
    // console.log(formik);

    function handleChange(e) {
        setData({ ...Data, [e.target.id]: e.target.value })
        setdataError({ ...dataError, [e.target.id]: '' })
    }

    function handleSubmit() {
        let Error = {
            country: '',
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phno: '',
        }
        let validated = true;
        if (Data.country.trim() === "") {
            // Error.country = 'Please Select your Country!'
            validated = false;
        }
        if (Data.fname.trim() === "") {
            // Error.fname = 'Please Enter your Firstname'
            validated = false;
        }
        if (Data.lname.trim() === "") {
            // Error.lname = 'Please Enter your Lastname'
            validated = false;
        }
        if (Data.address.trim() === "") {
            // Error.address = 'Please Enter your Address'
            validated = false;
        }
        if (Data.city.trim() === "") {
            // Error.city = 'Please Enter your City name'
            validated = false;
        }
        if (Data.state.trim() === "") {
            // Error.state = 'Please Enter your state name'
            validated = false;
        }
        if (Data.zip.trim() === "") {
            // Error.zip = 'Please Enter Zip code'
            validated = false;
        }
        if (Data.email.trim() === "") {
            // Error.email = 'Please Enter your email'
            validated = false;
        }
        if (Data.phno.trim() === "") {
            // Error.phno = 'Please Enter your Mobile No.'
            validated = false;
        }
        setdataError({ ...Error })
        if (validated) {
            if (checked) {
                handleCheckout()
            }
            else {
                Swal.fire({
                    title: "Warning!",
                    text: "Please Accept Terms and Conditions",
                    icon: "warning"
                });
            }
        }
        else {
            Swal.fire({
                title: "Warning!",
                text: "All Fields are Mandetory!",
                icon: "warning"
            });
        }
    }

    function handleCheckout() {
        var options = {
            "key": "rzp_test_nQmgWW7CsQ34bT", // Enter the Key ID generated from the Dashboard
            "amount": Amount.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Footwear", //your business name
            "description": "Test Transaction",
            "image": "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg",
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "handler": function (response) {
                if (response) {
                    navigate('/thankyou')
                    dispatch(EmptyCart())
                }
                else {
                    alert('Payment Failed')
                }
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": `${Data.fname} ${Data.lname}`, //your customer's name
                "email": `${Data.email}`,
                "contact": `${Data.phno}` //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = window.Razorpay(options);
        rzp1.open();
    }

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/products')
        }
    }, [])
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Checkout</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="colorlib-product">
                <div className="container">
                    <div className="row row-pb-lg">
                        <div className="col-sm-10 offset-md-1">
                            <div className="process-wrap">
                                <div className="process text-center active">
                                    <p><span>01</span></p>
                                    <h3>Shopping Cart</h3>
                                </div>
                                <div className="process text-center active">
                                    <p><span>02</span></p>
                                    <h3>Checkout</h3>
                                </div>
                                <div className="process text-center">
                                    <p><span>03</span></p>
                                    <h3>Order Complete</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <form className="colorlib-form">
                                <h2>Billing Details</h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="country">Select Country</label>
                                            <div className="form-field">
                                                <i className="icon icon-arrow-down3"></i>
                                                <select name="people" id="country" className="form-control" onChange={handleChange}>
                                                    <option value="">Select country</option>
                                                    <option value="Alaska">Alaska</option>
                                                    <option value="China">China</option>
                                                    <option value="India">India</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Korea">Korea</option>
                                                    <option value="Philippines">Philippines</option>
                                                </select>
                                            </div>
                                            <span style={{ color: 'red' }}>{dataError.country}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" onChange={handleChange} id="fname" className="form-control" placeholder="Your firstname" />
                                            <span style={{ color: 'red' }}>{dataError.fname}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" onChange={handleChange} id="lname" className="form-control" placeholder="Your lastname" />
                                            <span style={{ color: 'red' }}>{dataError.lname}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="fname">Address</label>
                                            <input type="text" id="address" className="form-control" placeholder="Enter Your Address" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.address}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="companyname">Town/City</label>
                                            <input type="text" id="city" className="form-control" placeholder="Town or City" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.city}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="stateprovince">State/Province</label>
                                            <input type="text" id="state" className="form-control" placeholder="State Province" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.state}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lname">Zip/Postal Code</label>
                                            <input type="text" id="zip" className="form-control" placeholder="Zip / Postal" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.zip}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail Address</label>
                                            <input type="text" id="email" className="form-control" placeholder="State Province" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.email}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="Phone">Phone Number</label>
                                            <input type="text" id="phno" className="form-control" placeholder="" onChange={handleChange} />
                                            <span style={{ color: 'red' }}>{dataError.phno}</span>
                                        </div>
                                    </div>

                                    {/* <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="radio">
                                                <label><input type="radio" name="optradio" /> Create an Account? </label>
                                                <label><input type="radio" name="optradio" /> Ship to different address</label>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="cart-detail">
                                        <h2>Cart Total</h2>

                                        <ul>
                                            <li>
                                                <span>Subtotal</span> <span>{Amount.subtotal}.00 ₹/-</span>
                                                {
                                                    cart.map((data, i) => {
                                                        return (
                                                            <ul key={i}>
                                                                <li><span>{data.quantity} x {data.title}</span> <span>{data.price * data.quantity}.00 ₹/-</span></li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </li>
                                            <li><span>Shipping</span> <span>{cart.length * 50}.00 ₹/-</span></li>
                                            <li><span>Discount</span> <span>-{cart.length * 10}.00 ₹/-</span></li>
                                            <li><span>Order Total</span> <span>{Amount.total}.00 ₹/-</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-100"></div>

                                <div className="col-md-12">
                                    <div className="cart-detail">
                                        <h2>Payment Method</h2>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" /> Direct Bank Tranfer</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" /> Check Payment</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" /> Paypal</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="checkbox">
                                                    <label><input type="checkbox" value={checked} id='isCheck' onChange={(event) => setChecked(event.target.checked)} /> I have read and accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p><button type='submit' className="btn btn-primary" onClick={handleSubmit}>Place an order</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout