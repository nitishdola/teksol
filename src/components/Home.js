import React, { useState } from 'react'
import {HomeSlider} from './HomeSlider'
import {Link} from 'react-router-dom'

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


export const Home = (props) => {

    const navigate = useNavigate();

    const [mailInput, setMailInput] = useState({
        name : '',
        mobile : '',
        email : '',
        message : '',
        organization_name : '',
        error_list : []

    });

    const handleInput = (e) => {
        e.persist();
    
        setMailInput({...mailInput,[e.target.name] : e.target.value});
    }

    const submitContactForm = (e) => {
        e.preventDefault();
        console.log('Submit Form');

        const input_data = {
            name : mailInput.name,
            email : mailInput.email,
            mobile : mailInput.mobile,
            message : mailInput.message,
            organization_name : mailInput.organization_name
        }

        axios.post('/api/send-mail', input_data).then(res => {
            if(res.data.status === 200) {
              swal('Success', res.data.message, 'success');
              navigate('/');
            }else{
              setMailInput({...mailInput, error_list:res.data.validation_errors})
            }
        });
    }


  return (
    <>

<HomeSlider />

      <section className="background-white text-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <h3 className="color-primary fs-2 fs-lg-3">Our Strength</h3>
                    <p className="px-lg-4 mt-3">We deliver what we commit..!</p>
                    <hr className="short" data-zanim='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
                </div>
            </div>
            <div className="row mt-4 mt-md-5">
                <div className="col-sm-6 col-lg-3 mt-4 content-item" data-zanim-timeline='{"delay":0.1}' data-zanim-trigger="scroll">
                    <div className="our-strength-class background-11 border border-color-9 radius-round mx-auto d-flex align-items-center home_icons" data-zanim='{"delay":0}'>
                        <span className="icon-Bar-Chart5 fs-3 color-blueish mx-auto fw-600"></span>
                    </div>
                    <h5 className="mt-4" data-zanim='{"delay":0.1}'>Experienced</h5>
                    <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
                        Leaded by 17+ years experienced person.
                    </p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4 content-item" data-zanim-timeline='{"delay":0.1}' data-zanim-trigger="scroll">
                    <div className="our-strength-class background-11 border border-color-9 radius-round mx-auto d-flex align-items-center home_icons" data-zanim='{"trigger":"scroll"}'>
                        <span className="icon-Clock fs-3 color-blueish mx-auto fw-600"></span>
                    </div>
                    <h5 className="mt-4" data-zanim='{"delay":0.1}'>Technologically Updated</h5>
                    <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
                        Well verged with the technological updates, understanding of customer’s requirements & strong relationships with them.
                    </p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4 content-item" data-zanim-timeline='{"delay":0.1}' data-zanim-trigger="scroll">
                    <div className="our-strength-class background-11 border border-color-9 radius-round mx-auto d-flex align-items-center home_icons" data-zanim='{"trigger":"scroll"}'>
                        <span className="icon-Idea-2 fs-3 color-blueish mx-auto fw-600"></span>
                    </div>
                    <h5 className="mt-4" data-zanim='{"delay":0.1}'>Excellent service support</h5>
                    <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
                        Excellent service support backup, quick response to our clients and Principals
                    </p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4 content-item" data-zanim-timeline='{"delay":0.1}' data-zanim-trigger="scroll">
                    <div className="our-strength-class background-11 border border-color-9 radius-round mx-auto d-flex align-items-center home_icons" data-zanim='{"trigger":"scroll"}'>
                        <span className="icon-Headset fs-3 color-blueish mx-auto fw-600"></span>
                    </div>
                    <h5 className="mt-4" data-zanim='{"delay":0.1}'>Good co-ordination</h5>
                    <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
                        Good co-ordination with the Principals and clients, backed with proper reporting and enlisting of the customer’s requirements.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h4>Product Gallery |</h4>
          <div className="row">
              {props.gallery_images[0].sl_1.path.map((image, index) => (
              <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                  <Link to="/microscope-and-microscopic-products">
                    <img
                    className='gallery img-fluid'
                      src={image.image_src} 
                    />
                  </Link>
              </div>
              ))}


                {props.gallery_images[0].sl_3.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/rotary-microtome">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}



                {props.gallery_images[0].sl_4.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/solution-for-plant-study">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}


{props.gallery_images[0].sl_5.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/general-lab-instruments">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}


{props.gallery_images[0].sl_6.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/products-for-microbiological-tissue-culture-laboratories">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}


{props.gallery_images[0].sl_7.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/products-and-solutions-for-freezer-dryer">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}



{props.gallery_images[0].sl_8.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/solutions-for-various-testing-and-measuring-instruments">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}


{props.gallery_images[0].sl_9.path.map((image, index) => (
                    <div key={image.id} className="rounded gallery_product border border-warning col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe">
                        <Link to="/solutions-for-chemical-lab-chemical-analysis">
                            <img
                            className='gallery img-fluid'
                            src={image.image_src} 
                            />
                        </Link>
                    </div>
                ))}

            </div>
            
          </div>
      </section>


    <section className="background-primary py-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md">
                    <h4 className="color-white mb-1">
                        If you have any query <br className="d-md-none" />
                    </h4>
                </div>
                <div className=""><Link className="btn btn-white btn-capsule" to="/contact">Contact Us</Link></div>
            </div>
        </div>
    </section>

    


    <section className="background-primary">
  <div className="container">
      <div className="row align-items-center color-white">
          <div className="col-lg-4">
              <div className="border border-2x border-color-warning p-4 py-lg-5 text-center" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden"><h4 className="color-white" data-zanim='{"delay":0}'>Request a call back</h4></div>
                  <div className="overflow-hidden">
                      <p className="px-lg-1 color-11 mb-0" data-zanim='{"delay":0.1}'>
                          Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-lg-8 pl-lg-5 mt-6 mt-lg-0">
              <h5 className="color-white">I would like to discuss:</h5>
              <form className="zform mt-4" onSubmit={submitContactForm} id="contactForm">
                  <div className="row">
                      <div className="col-6">
                          
                          <input className="form-control" name="name" type="text" placeholder="Your Name" aria-label="Enter Full Name" />
                      </div>

                      <div className="col-6">
                          
                          <input className="form-control" name="organization_name" type="text" placeholder="Organization Name" aria-label="Organization Name" />
                      </div>

                      
                  </div>

                  <div className="row">

                        <div className="col-6  mt-4"><input className="form-control" name="mobile" type="text" placeholder="Phone Number" aria-label="Enter Mobile Number" /></div>

                      <div className="col-6 mt-4"><input className="form-control" name="email" type="text" placeholder="Email" aria-label="Enter Email" /></div>
                    </div>

                <div className="row">
                      <div className="col-6 mt-4">
                        <textarea className="form-control" rows="4" type="text" name="message" placeholder="Message" aria-label="Enter Message"></textarea>
                        </div>

                      <div className="col-6 mt-4"><button className="btn btn-warning btn-block" type="submit">Submit</button></div>
                      <div className="col-12"><div className="zform-feedback mt-4"></div></div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>



<section className="background-10 py-6" id="clients">
  <div className="container">

      <h3>Our Clients</h3>

      <div className="row align-items-center" data-zanim-timeline="{}" data-zanim-trigger="scroll">
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/iitg.jpg" alt="" data-zanim="{}" /></div>
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/food.png" alt="" data-zanim="{}" /></div>
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/gu.png" alt="" data-zanim="{}" /></div>
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/iasst.png" alt="" data-zanim="{}" /></div>
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/aau.png" alt="" data-zanim="{}" /></div>
          <div className="col-4 col-md-2 my-3 overflow-hidden"><img src="assets/images/partner/tea.png" alt="" data-zanim="{}" /></div>
      </div>

      <p className="client-more float-right">....and many more!</p>
  </div>
</section>


    </>
  )
}
