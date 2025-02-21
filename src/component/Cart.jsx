import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, remove } from '../state/cartSlice'
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
	const cart = useSelector((state) => state.cart.cartProducts);
	const sub = useSelector((state) => state.cart.totalAmount.subtotal);
	const total = useSelector((state) => state.cart.totalAmount.total);

	const dispatch = useDispatch();

	const navigate = useNavigate();
	function handleCheckout() {
		navigate('/checkout')
	}
	// console.log(cart);

	return (
		<div>
			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Shopping Cart</span></p>
						</div>
					</div>
				</div>
			</div>


			<div className="colorlib-product">
				<div className="container">
					<div className="row row-pb-lg">
						<div className="col-md-10 offset-md-1">
							<div className="process-wrap">
								<div className="process text-center active">
									<p><span>01</span></p>
									<h3>Shopping Cart</h3>
								</div>
								<div className="process text-center">
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
					<div className="row row-pb-lg">
						<div className="col-md-12">
							<div className="product-name d-flex">
								<div className="one-forth text-left px-4">
									<span>Product Details</span>
								</div>
								<div className="one-eight text-center">
									<span>Price</span>
								</div>
								<div className="one-eight text-center">
									<span>Quantity</span>
								</div>
								<div className="one-eight text-center">
									<span>Total</span>
								</div>
								<div className="one-eight text-center px-4">
									<span>Remove</span>
								</div>
							</div>
							{
								cart.map((data, i) => {
									return (
										<div className="product-cart d-flex" key={data.id}>
											<div className="one-forth">
												<div className="product-img" style={{ backgroundImage: `url(${data.image})` }}>
												</div>
												<div className="display-tc">
													<h3>{data.title}</h3>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<span className="price">{data.price}</span>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<div className="d-flex">
														<button className='btn' onClick={() => dispatch(decrement(data))}>-</button>
														<input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value={data.quantity} min="1" max="100" />
														<button className='btn' onClick={() => dispatch(increment(data))}>+</button>
													</div>

												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<span className="price">{data.price * data.quantity}</span>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<button className='btn' onClick={() => { dispatch(remove(data)) }}>x</button>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="row row-pb-lg">
						<div className="col-md-12">
							<div className="total-wrap">
								<div className="row">
									<div className="col-sm-8">
										<form action="#">
											<div className="row form-group">
												<div className="col-sm-9">
													<input type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
												</div>
												<div className="col-sm-3">
													<input type="submit" value="Apply Coupon" className="btn btn-primary"/>
												</div>
											</div>
										</form>
									</div>

									<div className="col-sm-4 text-center">
										<div className="total">
											<div className="sub">
												<p><span>Subtotal:</span> <span>{sub}.00 ₹/-</span></p>
												<p><span>Delivery:</span> <span>{50 * cart.length} ₹/-</span></p>
												<p><span>Discount:</span> <span>{cart.length * 10}.00 ₹/-</span></p>
											</div>
											<div className="grand-total">
												<p><span><strong>Total:</strong></span> <span>{total}.00 ₹/-</span></p>
											</div>
										</div>
										{cart.length !== 0 ? <p className="addtocart mt-3"><button onClick={handleCheckout} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Proceed to Checkout</button></p> : <p className="addtocart mt-3"><button className="btn btn-primary btn-addtocart" disabled><i className="icon-shopping-cart"></i> Proceed to Checkout</button></p>}
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
							<h2>Related Products</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require('../assets/img/item-1.jpg')} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require('../assets/img/item-2.jpg')} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Minam Meaghan</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require('../assets/img/item-3.jpg')} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Men's Taja Commissioner</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require('../assets/img/item-4.jpg')} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Russ Men's Sneakers</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
