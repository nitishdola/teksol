import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export const Contact = () => {

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
    <section className="bg-100">
      <div className="container">
        <div className="row align-items-stretch justify-content-center mb-4">
          <div className="col-lg-6 mb-12 mb-lg-0">
            <div className="card h-100">
              <div className="card-body px-5">
                <h5 className="mb-3">Teksol Corporation</h5>
                <p className="mb-0 text-1100">
                  Ghoramara Chariali, <br />
                  Behind Maa Kaali Mandir, <br />
                  3rd Floor,
                  <br />
                  Bhetapara, Guwahati-781028, Assam
                </p>

                <p>Call Us : +91 9864911221/ +91 8486504795</p>

                <p>Write to Us : info@teksolcorporation.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body h-100">
                <h5 className="mb-3">Write to us</h5>
                <form
                  onSubmit={submitContactForm}
                  id="contactForm"
                >
                  <div className="mb-4">
                    <input
                      className="form-control bg-white"
                      name="name"
                      value={mailInput.name}
                      onChange={handleInput}
                      type="text"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control bg-white"
                      name="organization_name"
                      value={mailInput.organization_name}
                      onChange={handleInput}
                      type="text"
                      placeholder="Your Organization Namer"
                      required="required"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control bg-white"
                      name="mobile"
                      value={mailInput.mobile}
                      onChange={handleInput}
                      type="number"
                      placeholder="Your Mobile Number"
                      required="required"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="form-control bg-white"
                      name="email"
                      value={mailInput.email}
                      onChange={handleInput}
                      type="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control bg-white"
                      name="message"
                      value={mailInput.message}
                      onChange={handleInput}
                      rows="4"
                      placeholder="Enter your message here..."
                      required="required"
                    ></textarea>
                  </div>
                  <button className="btn btn-md-lg btn-primary" type="Submit">
                    <span className="color-white fw-600">Send Now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4" id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3174409215717!2d91.77652621439813!3d26.1211908000037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5fd30708731d%3A0x57ca779ccb69891c!2sTeksol%20Corporation!5e0!3m2!1sen!2sin!4v1650173911426!5m2!1sen!2sin"
            width="1200"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
