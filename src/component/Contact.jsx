import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
	return (
		<div>
			{/* <div className="colorlib-loader"></div> */}
			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="bread"><span><Link to={'/'}>Home</Link></span> / <span>Contact</span></p>
						</div>
					</div>
				</div>
			</div>


			<div id="colorlib-contact">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h3>Contact Information</h3>
							<div className="row contact-info-wrap">
								<div className="col-md-3">
									<p><span><i className="icon-location"></i></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
								</div>
								<div className="col-md-3">
									<p><span><i className="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
								</div>
								<div className="col-md-3">
									<p><span><i className="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
								</div>
								<div className="col-md-3">
									<p><span><i className="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="contact-wrap">
								<h3>Get In Touch</h3>
								<form action="#" className="contact-form">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="fname">First Name</label>
												<input type="text" id="fname" className="form-control" placeholder="Your firstname" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="lname">Last Name</label>
												<input type="text" id="lname" className="form-control" placeholder="Your lastname" required />
											</div>
										</div>
										<div className="w-100"></div>
										<div className="col-sm-12">
											<div className="form-group">
												<label htmlFor="email">Email</label>
												<input type="text" id="email" className="form-control" placeholder="Your email address" required />
											</div>
										</div>
										<div className="w-100"></div>
										<div className="col-sm-12">
											<div className="form-group">
												<label htmlFor="subject">Subject</label>
												<input type="text" id="subject" className="form-control" placeholder="Your subject of this message" required />
											</div>
										</div>
										<div className="w-100"></div>
										<div className="col-sm-12">
											<div className="form-group">
												<label htmlFor="message">Message</label>
												<textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
											</div>
										</div>
										<div className="w-100"></div>
										<div className="col-sm-12">
											<div className="form-group">
												<input type="submit" value="Send Message" className="btn btn-primary" />
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-md-6">
							<div id="map" className="colorlib-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79400671698!2d74.15646588457898!3d16.708452233396038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1729486392193!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
