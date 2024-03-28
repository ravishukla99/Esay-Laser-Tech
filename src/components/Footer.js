import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap'
const Footer = () => {
  return (
	
	
	<MDBFooter className='text-center text-lg-start text-muted mt-4 ' style={{background:"#171211"}}>
	<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-gradient' style={{background:"lightgrey"}}>
	  <div className='me-5 d-none d-lg-block'>
		<span>Get connected with us on social networks:</span>
	  </div>

	  <div>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="facebook-f" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="twitter" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="google" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="instagram" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="linkedin" />
		</a>
		<a href='' className='me-4 text-reset'>
		  <MDBIcon fab icon="github" />
		</a>
	  </div>
	</section>

	<section >
	  <MDBContainer className='text-center text-md-start mt-5 ' >
		<MDBRow className='mt-3'>
		  <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
			<h5 className='text-uppercase fw-bold mb-4' style={{color:"#199AD8"}}>
			  <MDBIcon icon="gem" className="me-3 "  />
			  EASY LASER TECH
			</h5>
			<span  style={{color:"#e5edf1"}}>
			9, Gayatri Baug Soc, Nr Laxmi Hotel,Varachha Main Road,Surat-395006 ,Gujarat-India

			</span>
		  </MDBCol>

		  <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
			<h5 className='text-uppercase fw-bold mb-4 text-center' style={{color:"#199AD8"}}>OUR SERVICE</h5>
			<p className="text-center">
			<Link to={'/FLMM'} className="footerlinks" style={{color:"#e5edf1", textDecoration:"none"}}>Fiber Laser Marking Machine
			</Link>
			</p>
			<p className="text-center">
			<Link to={'/FLCM'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Fiber Laser Cutting Machine			</Link>
			</p>
			<p className="text-center">
			<Link to={'/FLWM'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Fiber Laser Welding Machine
			</Link>
			</p>
			<p className="text-center">
			<Link to={'/OLMM'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Online Laser Marking Machine
			</Link>
			</p>
		
			
	
		  </MDBCol>

		  <MDBCol md="2" lg="2" xl="2" className='mx-auto mt-5'>
		  <p className="text-center">
		  <Link to={'/CO2LEM'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Co2 Laser Engraving Machine
		  </Link>
		  </p>

		  <p className="text-center">
		  <Link to={'/GTM'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Gold Testing Machine

		  </Link>
		  </p>
		  <p className="text-center">
		  <Link to={'/jcm'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Jewellery Cutting Machine


		  </Link>
		  </p>
	
		  <Button className='m-3'>
			<Link to={'/products'} style={{color:"white", textDecoration:"none",margin:"5px"}}>View +</Link></Button>
			
		  </MDBCol>


		  <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 '>
			<h5 className='text-uppercase fw-bold mb-4 text-center' style={{color:"#199AD8"}}>Useful links</h5>
			<p className="text-center">
			<Link to={'/'} className="footerlinks " style={{color:"#e5edf1",textDecoration:"none"}}>Home</Link>
			</p>
			<p className="text-center">
			<Link to={'/about'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>About Us</Link>
			  
			</p>
			<p className="text-center">
			<Link to={'/services'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Services</Link>
			</p>
			<p className="text-center">
			<Link to={'/contact'} className="footerlinks" style={{color:"#e5edf1",textDecoration:"none"}}>Contact</Link>
			</p>
		  </MDBCol>

		  <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
			<h5 className='text-uppercase fw-bold mb-4 text-center' style={{color:"#199AD8"}}>Contact</h5>
		
			<p className="text-center" style={{color:"#e5edf1"}}>
			  <MDBIcon icon="envelope" className="me-3"  />
			  easylasertech@gmail.com
			</p>
			
			<p className="text-center" style={{color:"#e5edf1",marginRight:"58px"}}>
			  <MDBIcon icon="phone" className="me-3" />+91 9824188918
			  <p style={{color:"#e5edf1",paddingLeft:"33px"}} className='m-2' >+91 9033040311</p>
			</p>
			<Image src="./Images/ELT-logo1.jpg" style={{ width: "10rem" }} className='m-4'/>
			

		  </MDBCol>
		</MDBRow>
	  </MDBContainer>
	</section>

	<div className='text-center py-4' style={{ background:"white" }}>
	  © EASY LASER TECH-2024 | Designed & Developed By 
	  <a className='text-reset fw-bold text-decoration-none' href="https://www.linkedin.com/in/shuklaravi25/ " target='_blank'>
	<span>  Ravi .</span>                                        


	  </a>
	  <a href="https://www.indiamart.com/easylasertech/profile.html" target="_blank"><Image src="/Images/social media/trustseal.jpg" style={{width:"75px"}} className='mx-5 shado'/></a>

	</div>
  </MDBFooter>
);
}

export default Footer
