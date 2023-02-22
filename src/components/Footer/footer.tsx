import Link from "next/link";

export default function Footer() {
    return (
        <div className="ir217-footer">
            <div className="container ir217-footer-links container1170">
                <div className="row">
                    <div className="drop_down col-md-2 col-sm-3 fore1">
                        <div className="column">
                            <div className="h3">
                                <Link href="/about-brilliant-earth/" className="link">ABOUT</Link>
                            </div>
                            <ul className="submenu panel-collapse collapse">
                                <li><Link href="#">Visit Our Showrooms</Link></li>
                                <li><Link href="#">Our Story</Link></li>
                                <li><Link href="#">Beyond Conflict Free<sup style={{ top: '-0.9em!important', fontSize: '60%!important' }}>TM</sup> Diamonds</Link></li>
                                <li><Link href="#">Recycled Gold</Link></li>
                                <li><Link href="#">Virtual Experience</Link></li>
                                <li><Link href="#">Brilliant Earth Reviews</Link></li>
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="#">Accessibility</Link></li>
                                <li><Link href="#">Accessibility Info</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Investor Relations</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="drop_down col-md-2 col-sm-3 fore2">
                        <div className="column">
                            <div className="h3">
                                <Link href="/customer-care/" className="link">CUSTOMER CARE</Link>
                            </div>
                            <ul className="submenu panel-collapse collapse">
                                <li><Link href="#">Free Shipping Both Ways</Link></li>
                                <li><Link href="#">Free 30 Day Returns</Link></li>
                                <li><Link href="#">Free Lifetime Warranty</Link></li>
                                <li><Link href="#">Lifetime Diamond Upgrade</Link></li>
                                <li><Link href="#">Flexible Payment Options</Link></li>
                                <li><Link href="#">Promo Codes & Offers</Link></li>
                                <li><Link href="#">Refer a Friend</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div role="tab" className="col-md-2 col-sm-3 fore3 hidden-xs">
                        <div className="column">
                            <div className="h3">
                                <Link href="/contact/" className="link">CONTACT</Link>
                            </div>
                            <ul className="submenu collapse">
                                <li><Link href="#">Book Virtual Appointment</Link></li>
                                <li><Link href="#">Affiliates</Link></li>
                                <li><Link href="#">800.691.0952</Link></li>
                                <li><Link href="#">Email Us</Link></li>
                                <li><Link href="#">Live Chat</Link></li>
                                <li><Link href="#">Track Your Order</Link></li>
                                <li><Link href="#">Student Offer</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div role="tab" className="col-md-3 col-sm-3 fore5 pt-sm-20 pt-xs-0">
                        <div className="column">
                            <div className="h3">
                                <span className="link">Sign Up <span>for</span> Email</span>
                            </div>
                            <ul className="submenu submenu-adress-form">
                                <li className="hidden-xs">Send me Brilliant Earth news, updates and offers.</li>
                                <li className="address-group-wrap be-join-movement">
                                    <form className="footer-email" method="post">
                                        <div className="input-group input-group-lg email-address-group">
                                            <input type="text" className="form-control email-input" name="email_address" placeholder="Your Email Address" maxLength={75} />
                                            <span className="input-group-btn">
                                                <button className="btn btn-success btn-default" type="button"></button>
                                            </span>
                                        </div>
                                        <div className="join-email"></div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
