import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
export const Slide6 = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_six_files').then(res => {
            setFiles(res.data.files)
        });
    }

  return (
    <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-12 px-lg-5 mt-6 mt-lg-0" data-zanim-timeline="{}" data-zanim-trigger="scroll">
            <div className="overflow-hidden">
                <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Products for Microbiological/Tissue Culture Laboratories</h5>
                <p className="mt-3">CO2 Incubator and Bio-Safety Cabinets, Laminar Flow Cabinets, Lab Centrifuge, Refrigerated Research Centrifuge (refrigerated and non-refrigerated with various options for rotors) from Sigma Germany</p>

                    

                </div>
            </div>

            <div className="overflow-hidden">
                <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
                <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Products Available </h5>
                
                </div>
            </div>
            <p>

                <div className="overflow-hidden">
                <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
                <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Brochures / Catalogs and more information</h5>
                <Link to="/contact">Contact Us</Link> for more details. 
                </div>
            </div>

            
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}
