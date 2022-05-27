import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Spinner } from '../Spinner';

export const Slide4 = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
      window.scrollTo(0, 0)
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_four_files').then(res => {
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
              <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Solutions for Plant Study, Plant Health and Agronomy Related Research Instruments</h5>
              <p className="mt-3">Leaf Area Meter, Canopy Analyzer, Leaf Spectrophotometer, In-situ root imaging system, Chlorophyll Meter, PAR Sensor, Light Sensor, Soil Respiration System, CO2 Analyzer</p>

                

            </div>
          </div>

          <div className="overflow-hidden">
            <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
              <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Products Available </h5>
              
            </div>
          </div>
          
          <div className="overflow-hidden">
            <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
              <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Brochures / Catalogs and more information</h5>

                {files.length >0 ? (
                  <>
                  {files.map((file,index) => (
                      <p className="mt-3" key={index}> 
                          <a target="_blank" href={process.env.REACT_APP_API_URL+ "assets/brochures/CID Bioscience_Qubit Systems_Apogee_Plant Health_Agronomy Related/" + file}>{file}</a>

                      </p>
                  ))}
                  </>
                ) : ( <Spinner /> ) }
            </div>
          </div>

          <p>
                    Principal's Website : <a href="https://cid-inc.com/" target="_blannk" className="btn btn-link">
                        CID Bio-Science
                    </a>
                </p>

        </div>
      </div>
    </div>
</section>
  )
}
