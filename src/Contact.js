import React from "react";
import { Container,Image } from "react-bootstrap";
import Whatsaapicon from "./components/Whatsaapicon";

const Contact = () => {
  document.title = "EASY LASER TECH - CONTACT";
  return (
    <>
	<Whatsaapicon/>
     
	<br/><br/>

    <div className='text-center' style={{backgroundImage:`url("./Images/background/bg-contact.jpg")`, height:"55vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>CONTACT US</h1>
	<h6 style={{color:"#ffff"}} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>CONTACT</span></h6>
	
	</div>
<br/>

	  <Container>
			<div className="row ">
			
				<div className="col-md text-center shado mt-5" >
					
					<Image src="./Images/social media/location.jpg" alt="mymap" style={{width:"55px"}}/>
					<br/><span>
					9, Gayatri Baug Soc, Nr Laxmi Hotel,Varachha Main Road,Surat-395006 ,Gujarat-India
					</span>
				</div>
				
				<div className="col-md text-center mt-5 shado">
					
					<Image src="./Images/social media/contact.jpg" alt="mymap" style={{width:"55px"}}/>
					
					<p className="text-center mt-3"><span >Kishore Padasala :-</span> +91 9824188918 </p>
					
				</div>
				
				<div className="col-md text-center shado mt-5" data-aos="zoom-in">
					
				<Image src="https://www.svgrepo.com/show/258698/email-mail.svg"  style={{width:"55px"}}/>
				
				<p className="text-center mt-2">easylasertech@gmail.com </p>
				
			</div>
			</div>
		</Container>

	  <br/>
      <h1 className=" text-uppercase text-center" >
        Contact Us
      </h1>
      <Container>
        <form action="https://formspree.io/f/mjvnonpl" method="POST" className="col-7 container text-center" target="_blank">
          <div className="form-group">
        
            <input type="text" name="name" className="form-control mb-4" placeholder="Name" />
          </div>
          <div className="form-group">
            
            <input type="email" name="email" className="form-control mb-4" placeholder="Email"/>
          </div>
		  <div className="form-group">
            
		  <input type="number" name="number" className="form-control mb-4" placeholder="Mobile Number"/>
		</div>

		<div className="form-group mb-4">
				<textarea className="form-control rounded-1" name="requirement" id="Textarea2" rows="3"
					placeholder="Requirement" autocomplete="off" required></textarea>
			</div>
			<button type="submit" className="px-5 rounded-1 p-1 my-2" style={{background:"#0099DA",color:"white",border:"none"}} >Submit</button>

        </form>

      </Container>
      <br />
	  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.479088596658!2d72.85637797471932!3d21.21284258143163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff457e42995%3A0x6d014e605875daef!2sEasy%20Laser%20Tech!5e0!3m2!1sen!2sin!4v1711177236216!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "300px" }}></iframe>
      
    </>
  );
};

export default Contact;
