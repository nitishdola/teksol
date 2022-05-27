import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Spinner } from '../Spinner';
export const Slide3 = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
      window.scrollTo(0, 0)
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_three_files').then(res => {
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
              <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Rotary Microtome, Cryostat, Tissue Processors and Hysto-pathological Research Instruments/Products from the most admired company of the world</h5>
              <p className="mt-3">Authorised dealer of Leica Biosystems, Germany</p>

                

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
                  <a target="_blank" href={process.env.REACT_APP_API_URL+ "assets/brochures/Leica Biosystems/" + file}>{file}</a>
                  </p>
                ))}
                </>
              ) : ( <Spinner /> ) }
            </div>
          </div>

          <p>
                    Principal's Website : <a href="https://www.leicabiosystems.com/en-in/" target="_blannk" className="btn btn-link">
                        Leica Biosystems
                    </a>
                </p>
        </div>
      </div>
    </div>
    </section>
  )
}
