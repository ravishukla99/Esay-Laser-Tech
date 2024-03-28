import React from 'react'
import {Row, Col, Container,Image } from 'react-bootstrap'
import Whatsaapicon from './components/Whatsaapicon';
const About = () => {
	document.title = "EASY LASER TECH - ABOUT";

  return (
	<>
	<Whatsaapicon/>
	<br/> 
    <div className='text-center' style={{backgroundImage:`url("./Images/background/bg-about.jpg")`, height:"55vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>ABOUT COMPANY</h1>
	<h6 style={{color:"#ffff"}} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>ABOUT US</span></h6>
</div>
	<br/>
	<Container>
	<Row className='my-3'>
	<Col xl={6} xs={12} className='px-5'> 
	<h2 style={{color:"#199AD8"}} className='my-2'>Company Profile</h2>
	<p style={{textAlign:"justify"}}>Founded in the year 2008 at surat (Gujarat, India), we “EASY LASER TECH” is a Proprietorship firm, engaged in Manufacturer, Wholesaler,  and Trader an optimum quality range of Laser Marking Machine, Laser Hallmarking Machine and much more. 
	</p><p style={{textAlign:"justify"}}>We are providing SS Laser Marking Job Work Service and Laser Machine Repairing Service to our client. 
	</p><p style={{textAlign:"justify"}}>These products are widely demanded in the industry owing to their excellent performance, long service life and less maintenance. Backed by the assistance of "Mr. KISHORKUMAR VALLABHBHAI PADSALA” (Proprietor), we have been able to provide maximum satisfaction to our esteemed clients.</p>
	
	</Col>
	<Col xl={6} xs={12} className='text-center'>
	<Image src="https://media.glassdoor.com/o/e8/ea/00/e5/sas-building-q.jpg" style={{width:"100%"}} className='rounded-2' />
	</Col>
	</Row>
	</Container>
	<div className='bg-light my-5'>
	<Container>
  <Row >
 <Col xl={6} xs={12} className='text-center'>
 <Image src="./Images/ELT-About.png" style={{ width: "60%" }} />

 </Col> 

 <Col xl={6} xs={12}>
 <h2 style={{backgroundColor:" #199AD8",color:"white",textAlign:"center"}}> Why Choose Us</h2>

 <p style={{textAlign:"justify"}}>Because of the high quality of our products, we have been able to gain a significant market share. We have a dedicated team of experts who help us in providing the highest quality products to our valued clients in accordance with their needs.</p>
 <h4>The following are the main aspects that distinguish us from our competitors:</h4>
 <Row className=" mb-40">
 <Col>
	<li><i className="fa fa-check-circle"></i> Acrylic Cutting</li>
	<li><i className="fa fa-check-circle"></i> MDF Cutting
		</li>
		<li><i className="fa fa-check-circle "></i> Gift Artical</li>
		<li><i className="fa fa-check-circle"></i> Leather Cutting</li>
		<li><i className="fa fa-check-circle"></i> Stone Engraving</li>
		</Col><Col>
		<li><i className="fa fa-check-circle"></i> Fabric Cutting</li>
		<li><i className="fa fa-check-circle"></i> Rubber Engraving</li>
		<li><i className="fa fa-check-circle"></i> Trophy</li>
		<li><i className="fa fa-check-circle"></i> Sign Board</li>
		</Col>
		</Row>
 </Col>
  </Row>
</Container>
</div>
<Container>
<Row className='my-3'>
<Col xl={6} xs={12}> 
<h2 style={{backgroundColor:" #199AD8",color:"white",textAlign:"center"}}> What We Do</h2>
	<h2 style={{color:"#199AD8"}} >Mission</h2>
	<p style={{textAlign:"justify"}} >To offer innovative and reliable services globally. To provide a positive experience and learning environment for our employees, which enables them to consistently provide excellent service.</p>
	<h2 style={{color:"#199AD8"}} >Vision</h2>
	<p style={{textAlign:"justify"}}>To be industry leader in the field of LASER Based equipments and Industrial applications.</p>
	<p style={{textAlign:"justify"}} >To become a trusted robotic machine manufacturing organisation globally through the power of creativity.</p>
	</Col>
	<Col xl={6} xs={12} className='text-center'>
	<Image src="./Images/Vision-Mision.png" style={{width:"60%"}} className='mt-5' />
	</Col>
	</Row>
</Container>

<div className='bg-light'>
<Container>
	
	<Row>
	<Col xl={6} xs={12}>
	<Image src="./Images/vision.jpg" style={{ width: "60%" }} className='m-4'/>

	</Col>
	<Col xl={6} xs={12}>
	<h2 style={{backgroundColor:" #199AD8",color:"white",textAlign:"center"}}> Core Values</h2>

	<h2 style={{color:"#199AD8"}} >Trust</h2>
	<p style={{textAlign:"justify"}} >We build trust through our customer-centric approach.

	</p>
	<h2 style={{color:"#199AD8"}} >Quality</h2>
	<p style={{textAlign:"justify"}} >We build trust through our customer-centric approach.

	</p>
	<h2 style={{color:"#199AD8"}} >Satisfaction</h2>
	<p style={{textAlign:"justify"}} >Customer satisfaction by delivering long-lasting robust machines.</p>
	</Col>
	
	</Row>
	</Container>
	</div>
	
	
	</>
  )
}

export default About
