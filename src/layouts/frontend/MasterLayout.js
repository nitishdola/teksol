import React from 'react'
import { Header } from './Header'
import { Navbar } from './Navbar'

export const MasterLayout = () => {
  return (
    <body data-spy="scroll" data-target=".inner-link" data-offset="60">
        <main>
            <div className="loading" id="preloader">
                <div className="loader h-100 d-flex align-items-center justify-content-center">
                    <div className="line-scale">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <section className="background-primary py-3 d-none d-sm-block">
                <Header />
            </section>

            <div class="znav-white znav-container sticky-top navbar-elixir" id="znav-container">
                <div class="container">
                    <Navbar />
                </div>
            </div>

            Master File and Slider here
        </main>
    </body>
  )
}
