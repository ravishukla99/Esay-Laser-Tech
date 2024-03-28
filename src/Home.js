import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Whatsaapicon from './components/Whatsaapicon';
import SliderProduct from './SliderProduct';
import ScrollButton from './components/ScrollButton';

function Home() {
	document.title = "Easy Laser Tech";
  return (
	<>
	<Whatsaapicon/>
	<ScrollButton/>
	<br/><br/>
	<SliderProduct/>
	<br/>
	<Container>
	<Row style={{borderBottom:"1px solid grey"}}>
	  <Col xs={12} md={8} lg={6} >
		<div style={{ width: "100%" }} className="m-3 px-5">
		  <div className='mt-5'>
			<Card.Body >
			  <h2 style={{color:"#199AD8"}} >About Us </h2>
			  <Card.Subtitle className="mb-2 "></Card.Subtitle>
			  <Card.Text style={{textAlign:"justify", marginRight:"14px"}} >
			  We are a group of industry veterans in the field of Lasers and analytical instruments.
EASY LASER TECH provides innovative, robust, and safe Laser solutions for the most demanding industries and jewellery applications.
</Card.Text><p style={{textAlign:"justify", marginRight:"14px"}}> Relying on a team of Laser & Analytical Technology experts with over 15 years of experience in the same field, we offer a complete range of products for jewellery applications such as Gold Testing Machines (XRF Analyzers), Laser Marking, Laser Cutting, and Laser Engraving Machine.Also co2 laser cuuting,marking,engraving of wooden and acrylic materils etc.</p><p style={{textAlign:"justify", marginRight:"14px"}}> A highly experienced team of seasoned professionals with knowledge and proficiency provides functional, efficient, and sustainable products that consistently meet our clients' requirements and budget.</p><p style={{textAlign:"justify", marginRight:"14px"}}>

What started as a spark of vision in 2019 has today soared into a dominant voice in the laser industry on the wings of our dedicated associates.</p> 

			  
			</Card.Body>
		  </div>
		</div>
	  </Col>
	  <br/>
	  <Col xs={12} md={8} lg={6} style={{borderLeft:"1px solid grey"}} className='mt-5'>
	<Image src='./Images/green machine.jpg' style={{marginTop:"30px",height:"63vh",width:"100%"}} className='rounded-2'/>
	  </Col>
	</Row>
  </Container>
<br/>

<Container>
<h2 style={{color:"#199AD8"}} className='my-4 text-center'>Our Laser Machine Products Range</h2>
<p style={{textAlign:"justify"}}>We “Easy Laser Tech” are a Sole Proprietorship firm, engaged in Manufacturer, Wholesaler, Exporter and Trader an optimum quality range of Laser Marking Machine, Laser Hallmarking Machine and much more. We are providing SS Laser Marking Job Work Service and Laser Machine Repairing Service to our client.</p>
</Container>

<Container className="mt-5 "> 
  <Row className="justify-content-center"> 
	  <Col xs={12} md={6} lg={3} className="my-1"> 
		  <Card className='shad'> 
		  
			  <Card.Img
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber- Laser-marking-Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body> 
			  <h4 className='text-center'>Fiber Laser Marking Machine</h4> 
				 
			  </Card.Body> 
			
		  </Card> 
	  </Col> 
	  <Col xs={12} md={6} lg={3} className="my-1"> 
		  <Card className='shad'> 
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber-Laser-Cutting-Machine.png'				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body > 
				  <h4 className='text-center'>Fiber Laser Cutting Machine</h4> 
				
			  </Card.Body> 
		  </Card> 
	  </Col> 

	  <Col xs={12} md={6} lg={3} className="my-1 "> 
	  <Card className='shad'> 
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/Laser-Welding-Machine.png'
			  alt="GeeksforGeeks Logo"
		  /> 
		  <Card.Body className='shad'> 
		  <h4 className='text-center'>Fiber Laser Welding Machine</h4> 
			 
		  </Card.Body> 
	  </Card> 
  </Col> 

  <Col xs={12} md={6} lg={3} className="my-1 "> 
  <Card className='shad'> 
	  <Card.Img 
		  variant="top"
		  src= 
		  './Images/Product Img/online laser marking machine.png' 
		  alt="GeeksforGeeks Logo"
	  /> 
	  <Card.Body> 
	  <h4 className='text-center'>Online Laser Marking Machine</h4> 
		 
	  </Card.Body> 
  </Card> 
</Col> 
   

  
	  <Col xs={12} md={6} lg={3} className="my-1"> 
		  <Card className='shad'> 
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Co2 Laser Cutting Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body> 
			  <h4 className='text-center'>Co2 Laser Cutting &
			  Engraving Machine</h4> 
				 
			  </Card.Body> 
		  </Card> 
	  </Col> 
	  <Col xs={12} md={6} lg={3} className="my-1"> 
		  <Card className='shad'> 
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Co2 Engraving Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body> 
			  <h4 className='text-center'>Co2 Laser Engraving Machine</h4> 
				
			  </Card.Body> 
		  </Card> 
	  </Col> 

	  <Col xs={12} md={6} lg={3} className="my-1"> 
	  <Card className='shad'> 
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/UV-Laser-machine.png' 
			  alt="GeeksforGeeks Logo"
		  /> 
		  <Card.Body> 
		  <h4 className='text-center'>UV Laser Marking Machine</h4> 
			 
		  </Card.Body> 
	  </Card> 
  </Col> 


  <Col xs={12} md={6} lg={3} className='my-1 shado1'> 
  <div className='shado border'> 
	  
	  <div> 
		  <Card.Title className=' fs-2' style={{margin:"126px"}}> <Link to={'/products'}  style={{textDecoration:"none"}}>See More Products...</Link></Card.Title> 

	  </div> 
  </div> 
</Col> 
  </Row> 
</Container> 

<Container>
<h2 style={{color:"#199AD8"}} className='my-4 text-center'>Our Diamond Machine Products Range</h2>

</Container>

<Container>
<Row>
<Col xs={12} md={6} lg={3} className="my-1"> 
<Card className='shad'> 
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/diamond/MULTIPIE SAWING MACHINE 1.jpg' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>Multipie Sawing Machine</h4> 
	  
	</Card.Body> 
</Card> 
</Col> 
<Col xs={12} md={6} lg={3} className="my-1"> 
<Card className='shad'> 
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/diamond/IR-Gelvo-Fency-4p-1.jpg' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>IR Gelvo Fency 4P </h4> 
	  
	</Card.Body> 
</Card> 
</Col> 
<Col xs={12} md={6} lg={3} className="my-1"> 
<Card className='shad'> 
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/diamond/FIBER-Gelvo-Fency-4p-1.jpg' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>Fiber Gelvo Fency 4P</h4> 
	  
	</Card.Body> 
</Card> 
</Col> 
<Col xs={12} md={6} lg={3} className="my-1"> 
<Card className='shad'> 
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/diamond/CVD-Coring-&-face-cut-FIBER-1.jpg' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>CVD Coring & Face Cut Fiber</h4> 
	  
	</Card.Body> 
</Card> 
</Col> 
</Row>

</Container>



<br/>
<div className='text-center' style={{backgroundImage:`url("./Images/background/contact-home.jpg")`, height:"100%",width:"100%",backgroundSize:"cover"}}>

<Container >
      <h2 className=" text-uppercase text-center my-2 " style={{background:"#6896DA",color:"white",fontFamily: "italic"}} >
	  TELL US WHAT ARE YOU LOOKING FOR ?
      </h2>
      <Container >
        <form action="https://formspree.io/f/mjvnonpl" method="POST" className="col-7 container text-center my-4" target="_blank">
          <div className="form-group ">
        
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
</Container>
</div>
	</>
  )
}

export default Home
