import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Spinner } from '../Spinner';

export const Slide9 = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_nine_files').then(res => {
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
                <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Solution for any Chemical Lab, Chemical Analysis & General Lab Instrument Requirements</h5>
                <p className="mt-3">Shakers, Stirrers, Magnetic Stirrers, Hot Plates, Homogenizers, Centrifuges, Rotary Evaporators, Pipetters, Auto-Titrators, Grain Moisture Meter
                </p>

                    

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
                            <a target="_blank" href={process.env.REACT_APP_API_URL+ "assets/brochures/DLAB/" + file}>{file}</a>

                        </p>
                    ))}
                    </>
                ) : ( <Spinner /> ) }
                
                </div>
            </div>

            <p>
                        Principal's Website : <a href="https://www.sparksci.in/" target="_blannk" className="btn btn-link">
                            Spark Scientific (DLab)
                        </a>
                    </p>

            </div>
        </div>
        </div>
    </section>
  )
}
