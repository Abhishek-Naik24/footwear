import React, { useEffect, useState } from 'react'
import cover1 from '../assets/img/cover-img-1.jpg'
import men from '../assets/img/men.jpg'
import women from '../assets/img/women.jpg'
import item from '../assets/img/item-11.jpg'
import { Link } from 'react-router-dom'

export default function Men() {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Men</span></p>
            </div>
          </div>
        </div>
      </div><div className="breadcrumbs-two">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumbs-img" style={{ backgroundImage: `url(${cover1})` }}>
                <h2>Men's</h2>
              </div>
              <div className="menu text-center">
                <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
              </div>
            </div>
          </div>
        </div>
      </div><div className="colorlib-featured">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div className="featured-img featured-img-2" style={{ backgroundImage: `url(${men})` }}>
                  <h2>Casuals</h2>
                  <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div className="featured-img featured-img-2" style={{ backgroundImage: `url(${women})` }}>
                  <h2>Dress</h2>
                  <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div className="featured-img featured-img-2" style={{ backgroundImage: `url(${item})` }}>
                  <h2>Sports</h2>
                  <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>View All Products</h2>
            </div>
          </div>
          <div className="row row-pb-md">
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-1.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Minam Meaghan</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-2.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Minam Meaghan</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-3.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Men's Taja Commissioner</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-4.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Russ Men's Sneakers</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-5.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-6.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-7.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-8.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-9.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-10.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-11.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-12.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-13.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-14.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-15.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src={require("../assets/img/item-16.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><Link to={"/cart"} className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart"></i> Add to Cart</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#"><i className="ion-ios-arrow-back"></i></a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#"><i className="ion-ios-arrow-forward"></i></a></li>
                </ul>
              </div>
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
      </div>
    </div >
  )
}
