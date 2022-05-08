import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Footer } from "./layouts/frontend/Footer";
import { Header } from './layouts/frontend/Header'
import { Navbar } from './layouts/frontend/Navbar'
import axios from 'axios';
import { Slide1 } from "./components/products/Slide1";
import { Slide3 } from "./components/products/Slide3";
import { Slide4 } from "./components/products/Slide4";
import { Slide5 } from "./components/products/Slide5";
import { Slide6 } from "./components/products/Slide6";
import { Slide7 } from "./components/products/Slide7";
import { Slide8 } from "./components/products/Slide8";
import { Slide9 } from "./components/products/Slide9";
import { Service } from "./layouts/frontend/Service";
import { AllProducts } from "./components/products/AllProducts";
import { Contact } from "./layouts/frontend/Contact";
function App() {

  var gallery_images = [
    {
      sl_1 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide1/1.jpg', 'id' : 11},
          { 'image_src' : 'assets/images/products/slide1/2.jpg', 'id' : 12},
          { 'image_src' : 'assets/images/products/slide1/3.jpg', 'id' : 13}
        ]
      },

      sl_3 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide3/1.jpg', 'id' : 31},
          { 'image_src' : 'assets/images/products/slide3/2.jpg', 'id' : 32},
          { 'image_src' : 'assets/images/products/slide3/3.jpg', 'id' : 33},
          { 'image_src' : 'assets/images/products/slide3/4.jpg', 'id' : 34}
        ]
      },


      sl_4 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide4/1.jpg', 'id' : 41},
          { 'image_src' : 'assets/images/products/slide4/2.jpg', 'id' : 42},
          { 'image_src' : 'assets/images/products/slide4/3.jpg', 'id' : 43},
          { 'image_src' : 'assets/images/products/slide4/4.jpg', 'id' : 44},
          { 'image_src' : 'assets/images/products/slide4/5.jpg', 'id' : 45},
          { 'image_src' : 'assets/images/products/slide4/6.jpg', 'id' : 46},
          { 'image_src' : 'assets/images/products/slide4/7.jpg', 'id' : 47},
        ]
      },


      sl_5 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide5/1.jpg', 'id' : 51},
          { 'image_src' : 'assets/images/products/slide5/2.jpg', 'id' : 52},
          { 'image_src' : 'assets/images/products/slide5/3.jpg', 'id' : 53},
          { 'image_src' : 'assets/images/products/slide5/4.jpg', 'id' : 54},
          { 'image_src' : 'assets/images/products/slide5/5.jpg', 'id' : 55},
          { 'image_src' : 'assets/images/products/slide5/6.jpg', 'id' : 56},
          { 'image_src' : 'assets/images/products/slide5/7.jpg', 'id' : 57},
        ]
      },


      sl_6 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide6/1.jpg', 'id' : 61},
          { 'image_src' : 'assets/images/products/slide6/2.jpg', 'id' : 62},
        ]
      },


      sl_7 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide7/1.jpg', 'id' : 71},
          { 'image_src' : 'assets/images/products/slide7/2.jpg', 'id' : 72},
        ]
      },


      sl_8 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide8/1.jpg', 'id' : 81},
          { 'image_src' : 'assets/images/products/slide8/2.jpg', 'id' : 82},
          { 'image_src' : 'assets/images/products/slide8/3.jpg', 'id' : 83},
          { 'image_src' : 'assets/images/products/slide8/4.jpg', 'id' : 84},
          { 'image_src' : 'assets/images/products/slide8/5.jpg', 'id' : 85},
          { 'image_src' : 'assets/images/products/slide8/6.jpg', 'id' : 86},
        ]
      },


      sl_9 : {
        'path' : [
          { 'image_src' : 'assets/images/products/slide9/1.jpg', 'id' : 91},
          { 'image_src' : 'assets/images/products/slide9/2.jpg', 'id' : 92},
          { 'image_src' : 'assets/images/products/slide9/3.jpg', 'id' : 93},
          { 'image_src' : 'assets/images/products/slide9/4.jpg', 'id' : 94},
          { 'image_src' : 'assets/images/products/slide9/5.jpg', 'id' : 95},
          { 'image_src' : 'assets/images/products/slide9/6.jpg', 'id' : 96},
          { 'image_src' : 'assets/images/products/slide9/7.jpg', 'id' : 97},
          { 'image_src' : 'assets/images/products/slide9/8.jpg', 'id' : 98},
        ]
      },
    }
  ];


axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

  return (
    <>
        <Router>
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

              <div className="znav-white znav-container sticky-top navbar-elixir" id="znav-container">
                  <div className="container">
                    
                      <Navbar />
                    
                  </div>
              </div>

              
                <Routes>
                  <Route
                    exact path='/'
                    element={<Home
                      gallery_images =  {gallery_images}
                      key={Date.now()}  
                    />}
                  />

                  

                  <Route
                    exact path='/about'
                    element={<About  
                    />}
                  />

                  <Route
                    exact path='/contact'
                    element={<Contact  
                    />}
                  />


                  <Route
                    exact path='/microscope-and-microscopic-products'
                    element={<Slide1  
                    />}
                  />

                  <Route
                    exact path='/rotary-microtome'
                    element={<Slide3  
                    />}
                  />


                  <Route
                    exact path='/solution-for-plant-study'
                    element={<Slide4  
                    />}
                  />


                  <Route
                    exact path='/general-lab-instruments'
                    element={<Slide5  
                    />}
                  />


                  <Route
                    exact path='/products-for-microbiological-tissue-culture-laboratories'
                    element={<Slide6 
                    />}
                  />

                  <Route
                    exact path='/products-and-solutions-for-freezer-dryer'
                    element={<Slide7 
                    />}
                  />

                  <Route
                    exact path='/solutions-for-various-testing-and-measuring-instruments'
                    element={<Slide8 
                    />}
                  />

                  <Route
                    exact path='/solutions-for-chemical-lab-chemical-analysis'
                    element={<Slide9
                    />}
                  />


                  <Route
                    exact path='/service'
                    element={<Service
                    />}
                  />


                  <Route
                    exact path='/view-all-products'
                    element={<AllProducts
                    />}
                  />  


                </Routes>

                <Footer />
                
              
            
            
          </main>
          </Router>
      
    </>
  );
}

export default App;
