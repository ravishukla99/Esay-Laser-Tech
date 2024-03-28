import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Products from "./Products.js";
import Contact from "./Contact.js";
import FLMM from "./FLMM.js";
import CO2LCEM from "./CO2LCEM.js";
import CO2LEM from "./CO2LEM.js";
import UVLMM from "./UVLMM.js";
import OLMM from "./OLMM.js";
import JSM from "./JSM.js";
import JCM from "./JCM.js";
import GTM from "./GTM.js";
import FLWM from "./FLWM.js";
import FLCM from "./FLCM.js";
import ErrorPage from "./ErrorPage";

	/* The following line can be included in your src/index.js or App.js file */
  
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"

/* Contact */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer.js";



const App = () => {
  return (
    	<Router>

	<Header/>
	
	
        <Routes>
          <Route path="/" element={<Home />} />

		  <Route path="/about" element={<About/>}/>
		  <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/flmm" element={<FLMM />} />
		  <Route path="/flcm" element={<FLCM />} />
		  <Route path="/flwm" element={<FLWM />} />
		  <Route path="/gtm" element={<GTM />} />
		  <Route path="/jcm" element={<JCM />} />
		  <Route path="/jsm" element={<JSM />} />
		  <Route path="/olmm" element={<OLMM />} />
		  <Route path="/uvlmm" element={<UVLMM />} />
		  <Route path="/co2lcem" element={<CO2LCEM />} />
		  <Route path="/co2lem" element={<CO2LEM />} />
		  <Route path="/flmm" element={<FLMM />} />

          <Route path="*" element={<ErrorPage />} />

        </Routes>
		
		<Footer />
      </Router>
	  
  );
};

export default App;
