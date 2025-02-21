import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
	const cart = useSelector((state) => state.cart.cartProducts)
	return (
		<div>
			<nav className="colorlib-nav" role="navigation">
				<div className="top-menu">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 text-left menu-1">
								<ul>
									<li className="active"><Link to={'/'}> <img src={require('../assets/img/logo.png')} alt="" style={{width: "150px"}}/></Link></li>
									<li><Link to={'/mens'}>Mens</Link></li>
									<li><Link to={'/womens'} >Womens</Link></li>
									<li><Link to={'/products'} >All Products</Link></li>
									<li><Link to={'/about'} >About</Link></li>
									<li><Link to={'/contact'} >Contact</Link></li>
									<li><Link to={'adminlogin'} >Admin Login</Link></li>
									<li className="cart"><Link to={'/cart'} ><button type="button" className="btn btn-light position-relative" fdprocessedid="u9jysf"><i className="icon-shopping-cart"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span></button></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="sale">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center">
								<div className="row">
									<div className="owl-carousel2">
										<div className="item">
											<div className="col">
												<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}
