import React from 'react'

export const Header = () => {
  return (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-auto-80 d-none d-lg-block">
            <div className="word"></div>
            </div>
            <div className="col-auto-20"><span className="fa fa-phone color-warning fw-800 icon-position-fix"></span><a className="ml-2 mb-0 fs--1 d-inline color-white fw-700" href="tel:2123865575">+91 9864911221</a></div>
        </div>
    </div>
  )
}
