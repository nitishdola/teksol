import React from 'react'
import {Link} from 'react-router-dom';

export const Service = () => {
  return (
    <section className="bg-100">
        <div className="container">
            <div className="row mt-6">
            <div className="col">
                <h3 className="text-center fs-2 fs-md-3">Service</h3>
                <hr className="short" />
            </div>
            <div className="col-12">
                <div className="bg-white px-3 mt-2 px-0 py-5 px-lg-5 rounded-3 abt text-justify">
                
                    <p className="dropcap">Teksol Corporation, have a full-fledged office with sales and after sales service support facility at 
                    Ghoramara Chariali, 
                     Bhetapara, Guwahati-781028, Assam with 
                     fast and efficient Sales and Service facilities to provide to our esteemed 
                     clients. We have tremendous faith in the teamwork culture in our 
                     field of work and thus always keep a good co-ordination with our principal 
                     companies of the products which we are dealing to provide hassle-free sales 
                     and service backup to our esteemed customers. We have a well-trained team of 
                     sales and service persons in our office and have a well-knit network of service 
                     persons in some areas of the region to provide an immediate solution for some of 
                     the common issues of our products.</p>

                    <p>Please call +91-7575918472 or <Link to="/contact">contact us</Link> for your any service requirement of Lab Instruments</p>


                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
