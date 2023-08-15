import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Spinner } from '../Spinner'

export const Slide1 = () => {
    
    const [files, setFiles] = useState([]);
    const REACT_APP_API_URL = "https://teksolcorporation.com/";

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_one_files').then(res => {
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
                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Microscopes and Microscopic Products/Applications</h5>
                    <p className="mt-3">Principal Company/Manufacturer: Leica Microsystems, Germany (Authorised Distributor for NE Region for Life Science Research Division)</p>
                    </div>
                </div>


                <div className="overflow-hidden">
                    <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Products Available </h5>
                    
                    </div>
                </div>


                <div className="overflow-hidden">
                    <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Product Brochures/ Catalogs and more information</h5>
                    
                        {files.length > 0 ? ( 
                            <>
                            {files.map((file,index) => (
                            <p className="mt-3" key={index}> 
                                    <a target="_blank" href={REACT_APP_API_URL+ "assets/brochures/Leica Microsystems/" + file}>{file}</a>

                                </p>
                            ))}</>
                         
                        ) : ( 
                            <Spinner />
                        ) }
                    
                    </div>
                </div>

                <p>
                    Principal's Website : <a href="https://www.leica-microsystems.com/" target="_blannk" className="btn btn-link">
                        Leica Microsystems
                    </a>
                </p>
                        
                </div>
            </div>
        </div>
    </section>
  )
}
