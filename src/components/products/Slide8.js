import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Spinner } from '../Spinner';

export const Slide8 = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
      fetchAllFiles();
    }, []);

    const fetchAllFiles = () => {
        axios.get('/api/slide_eight_files').then(res => {
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
                <h5 className="fs-0 fs-lg-1"><span className="fas fa-comment-dots fs-1 me-2" data-fa-transform="flip-h"></span>Solutions for Various Testing and Measuring Instruments from Testo, Germany</h5>
                <p className="mt-3">Authorised dealer of Testo, Germany <br />
                    Products: Portable and hand held instruments for measurement of Temperature, Humidity, Dew Point, Wet Bulb Temperature, Air Velocity, RPM, Pressure measurements, Various Dataloggers, Smart Probes, O2, CO, NO, NO2, SO2, CO2 measurements, Ambient CO CO2 Measuring Instruments, Thermal Imaging Cameras, Moisture Meter, pH, Cooking Oil Tester, Flue Gas & Heat Loss, Hot & Cold Spots detection & measurements, various Gas Leak Detectors, stack application as per environmental applications SOX,NOZ, CO, CO2 measurements, Electrical Measuring Instruments like Multimeters, Clamp Meters, High Voltage Testers, IR WINDOW, Thermal Imagers, etc.
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
                                <a target="_blank" href={process.env.REACT_APP_API_URL+ "assets/brochures/Testo/" + file}>{file}</a>

                            </p>
                        ))}
                    </>
                ) : (<Spinner />)}
                </div>
            </div>

            <p>
                        Pricipal's Website : <a href="https://www.testo.com/en-IN/" target="_blannk" className="btn btn-link">
                            TESTO
                        </a>
                    </p>

            </div>
        </div>
        </div>
    </section>
  )
}
