import React, { useEffect, useState } from 'react'
import men from '../assets/img/men.jpg'
import women from '../assets/img/women.jpg'

export default function Home() {
	return (
		<div>
			<div id="carouselExample" className="carousel slide" data-ride="carousel">
				{/* <!-- Indicators --> */}
				<ol className="carousel-indicators">
					<li data-target="#carouselExample" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExample" data-slide-to="1"></li>
					<li data-target="#carouselExample" data-slide-to="2"></li>
				</ol>

				{/* <!-- Carousel Items --> */}
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={require('../assets/img/img_bg_1.jpg')} alt="First slide" />
						<div className="carousel-caption">
							<h1 className="head-1">Men's</h1>
							<h2 className="head-2">Shoes</h2>
							<h2 className="head-3">Collection</h2>
							<p className="category"><span>New trending shoes</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={require('../assets/img/img_bg_2.jpg')} alt="Second slide" />
						<div className="carousel-caption">
							<h1 className="head-1">Huge</h1>
							<h2 className="head-2">Sale</h2>
							<h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
							<p className="category"><span>Big sale sandals</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={require('../assets/img/img_bg_3.jpg')} alt="Third slide" />
						<div className="carousel-caption">
							<h1 className="head-1">New</h1>
							<h2 className="head-2">Arrival</h2>
							<h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
							<p className="category"><span>New stylish shoes for men</span></p>
							<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
						</div>
					</div>
				</div>

				{/* <!-- Controls --> */}
				<a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>


			<div className="colorlib-intro">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h2 className="intro">It started with a simple idea: Create quality, well-designed products that I
								wanted myself.</h2>
						</div>
					</div>
				</div>
			</div><div className="colorlib-product">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 text-center">
							<div className="featured">
								<a href="/mens" className="featured-img" style={{ backgroundImage: `url(${men})` }}></a>
								<div className="desc">
									<h2><a href="/mens">Shop Men's Collection</a></h2>
								</div>
							</div>
						</div>
						<div className="col-sm-6 text-center">
							<div className="featured">
								<a href="/womens" className="featured-img" style={{ backgroundImage: `url(${women})` }}></a>
								<div className="desc">
									<h2><a href="/womens">Shop Women's Collection</a></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div><div className="colorlib-product">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
							<h2>Best Sellers</h2>
						</div>
					</div>
					<div className="row row-pb-md">
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-1.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-2.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Minam Meaghan</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-3.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Men's Taja Commissioner</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-4.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Russ Men's Sneakers</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-5.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-6.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-7.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-8.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-9.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-10.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-11.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-12.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-13.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-14.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-15.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/img/item-16.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
						</div>
					</div>
				</div>
			</div><div className="colorlib-partner">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
							<h2>Trusted Partners</h2>
						</div>
					</div>
					<div className="row">
						<div className="col partner-col text-center">
							<img src={require("../assets/img/brand-1.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../assets/img/brand-2.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../assets/img/brand-3.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../assets/img/brand-4.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../assets/img/brand-5.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
					</div>
				</div>
			</div><div className="gototop js-top">
				<a href="#" className="js-gotop"><i className="ion-ios-arrow-up"></i></a>
			</div>
		</div >
	)
}
