import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Spinner } from '../Spinner';

export const Slide5 = () => {
    const [files, setFiles] = useState([]);
    const REACT_APP_API_URL = "https://teksolcorporation.com/";

    useEffect(() => {
        window.scrollTo(0, 0)
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_five_files').then(res => {
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
                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Your Requirement of any General Lab Instruments and we have the Solutions</h5>
                    <p className="mt-3">Weighing Balances and Weighing Solutions, Moisture Analyzers, pH Meters, Conductivity Meters, DO Meter, Turbidity Meter, Ion Meters, UV Vis Spectrophotometers, Plant Growth Chambers, Heating Cooling Chambers and Environment Chambers-Standalone and Walk-in Plant Growth Chambers & Environment Chambers, Walk-in Cold Rooms, Medical Refrigerators/Deep Freezers/ Lab Freezers and Cold Rooms etc</p>

                        

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
                                        <a target="_blank" href={REACT_APP_API_URL+ "assets/brochures/Radwag/" + file}>{file}</a>

                                    </p>
                                ))}
                        </>
                    ) : ( <Spinner /> ) }
                    </div>
                </div>

                <p>
                            Principal's Website : <a href="https://radwag.com/en/" target="_blannk" className="btn btn-link">
                                Radwag, Poland
                            </a>
                        </p>

                
                </div>
            </div>
            </div>
            </section>
    )
}
