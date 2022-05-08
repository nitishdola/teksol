import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
      <>
        <section className='footer-section'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="background-primary color-white p-5 p-lg-6">
                        <h4 className="color-white fs-1 fs-lg-2 mb-1">TEKSOL CORPORATION</h4>
                        <p className="color-white">Ghoramara Chariali,
                            Behind Maa Kaali Mandir,<br />
                            3rd Floor,<br />
                            Bhetapara, Guwahati-781028, Assam 
                        </p>
                        <p className="color-white">Call Us : +91 9864911221/ +91 8486504795</p>
                        <p className="color-white">Write to Us : info@teksolcorporation.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="row">
                        <div className="col-6 col-lg-4 color-white ml-lg-auto">
                            <ul className="list-unstyled">
                                <li className="mb-3"><Link className="color-white" to="/contact">Contact Us</Link></li>
                            </ul>
                            <Link to="#">
                                <div className="row mb-3 align-items-center no-gutters">
                                    <div className="col-auto">
                                    <div className="background-primary social-icons text-center d-flex align-items-center radius-primary"><span className="w-100 fa fa-linkedin color-white"></span></div>
                                    </div>
                                    <div className="col-6 pl-3">
                                    <h5 className="fs-0 color-white mb-0 d-inline-block">Linkedin</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className="row mb-3 align-items-center no-gutters">
                                    <div className="col-auto">
                                    <div className="background-primary social-icons text-center d-flex align-items-center radius-primary"><span className="w-100 fa fa-twitter color-white"></span></div>
                                    </div>
                                    <div className="col-6 pl-3">
                                    <h5 className="fs-0 color-white mb-0 d-inline-block">Twitter</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className="row mb-3 align-items-center no-gutters">
                                    <div className="col-auto">
                                    <div className="background-primary social-icons text-center d-flex align-items-center radius-primary"><span className="w-100 fa fa-facebook color-white"></span></div>
                                    </div>
                                    <div className="col-6 pl-3">
                                    <h5 className="fs-0 color-white mb-0 d-inline-block">Facebook</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="background-primary text-center py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3 text-sm-left">
                        <Link to="/"><img src="assets/images/logo-light.png" alt="" /></Link>
                    </div>
                    <div className="col-sm-6 mt-3 mt-sm-0">
                        <p className="color-white lh-6 mb-0 fw-600">&copy; Copyright Teksol Corporation</p>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}
