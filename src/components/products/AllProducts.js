import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
export const AllProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 px-lg-5 mt-6 mt-lg-0" data-zanim-timeline="{}" data-zanim-trigger="scroll">
          
          <div className="overflow-hidden">
            <div className="px-4 px-sm-0 mt-5" data-zanim-xs='{"delay":0}'>
              <h5 className="fs-0 fs-lg-1"><span className="fas fa-palette fs-1 me-2" data-fa-transform="shrink-1"></span>Brochures</h5>

              <li><Link to="/microscope-and-microscopic-products">Brochures/ Catalog and more information of Microscopes, Cameras and Microscopy Products</Link></li>
              
              <li><Link to="/rotary-microtome">Brochures/ Catalog and more information of Rotary Microtome, Cryostat, Tissue Processors and other Histopathological Lab Instruments</Link></li>
              <li><Link to="/solution-for-plant-study">Brochures/ Catalog and more information of Plant Study and Agronomy Related Instuments </Link></li>
              <li><Link to="/general-lab-instruments">Brochures/ Catalog and more information of General Lab Instruments </Link></li>
              <li><Link to="/products-for-microbiological-tissue-culture-laboratories">Brochures/ Catalog and more information of Microbiological/Tissue Culture Laboratory Instruments </Link></li>
              <li><Link to="/products-and-solutions-for-freezer-dryer">Brochures/ Catalog and more information of Freeze Dryer/Lyophilizer & Vacuum Concentrators </Link></li>
              <li><Link to="/solutions-for-various-testing-and-measuring-instruments">Brochures/ Catalog and more information of Various Testing and Measuring Instruments </Link></li>
              <li><Link to="/solutions-for-chemical-lab-chemical-analysis">Brochures/ Catalog and more information of Chemical Lab, Chemical Analysis and General Lab Instruments</Link></li>

            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}
