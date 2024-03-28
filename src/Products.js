import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Whatsaapicon from './components/Whatsaapicon';


function Products() {
  return (
	
	  <div className='bg-light'>
<br/>
<Whatsaapicon/>


    <div className='text-center' style={{backgroundImage:`url("./Images/background/bg-products.jpg")`, height:"60vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>	OUR PRODUCTS</h1>
	<h6 style={{color:"#ffff"}} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>PRODUCTS</span></h6>
</div>
	<br/>


  <Container className="mt-5 "> 
  <Row className="justify-content-center"> 
	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
	 
	  <Card className='shado'> 
	  <Link to={"/flmm"} style={{textDecoration:"none"}}>
	    <Card.Img
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber- Laser-marking-Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			 
			  <Card.Body> 
			  <h4 className='text-center'>Fiber Laser Marking Machine</h4> 
				 
			  </Card.Body> 
			  </Link>
			  </Card> 
			  
	  </Col> 
	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
		  <Card className='shado'> 
		  <Link to={"/flcm"} style={{textDecoration:"none"}}>
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber-Laser-Cutting-Machine.png'				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body > 
				  <h4 className='text-center'>Fiber Laser Cutting Machine</h4> 
				
			  </Card.Body>
			  </Link> 
		  </Card> 
	  </Col> 

	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
	  <Card className='shado'> 
	  <Link to={"/flwm"} style={{textDecoration:"none"}}>
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/Laser-Welding-Machine.png'
			  alt="GeeksforGeeks Logo"
		  /> 
		  <Card.Body className='shado'> 
		  <h4 className='text-center'>Fiber Laser Welding Machine</h4> 
			 
		  </Card.Body> 
		  </Link>
	  </Card> 
  </Col> 

  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
  <Card className='shado'> 
  <Link to={"/olmm"} style={{textDecoration:"none"}}>
	  <Card.Img 
		  variant="top"
		  src= 
		  './Images/Product Img/online laser marking machine.png' 
		  alt="GeeksforGeeks Logo"
	  /> 
	  <Card.Body> 
	  <h4 className='text-center'>Online Laser Marking Machine</h4> 
		 
	  </Card.Body> 
	  </Link>
  </Card> 
</Col> 
   

  
	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
		  <Card className='shado'> 
		  <Link to={"/co2lcem"} style={{textDecoration:"none"}}>
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
			  </Link>
		  </Card> 
	  </Col> 
	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
		  <Card className='shado'> 
		  <Link to={"/co2lem"} style={{textDecoration:"none"}}>
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Co2 Engraving Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			  <Card.Body> 
			  <h4 className='text-center'>Co2 Laser Engraving Machine</h4> 
				
			  </Card.Body> 
			  </Link>
		  </Card> 
	  </Col> 

	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
	  <Card className='shado'> 
	  <Link to={"/flmm"} style={{textDecoration:"none"}}>
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/UV-Laser-machine.png' 
			  alt="GeeksforGeeks Logo"
		  /> 
		  <Card.Body> 
		  <h4 className='text-center'>UV Laser Marking Machine</h4> 
			 
		  </Card.Body> 
		  </Link>
	  </Card> 
  </Col> 

  
<Col xs={12} md={6} lg={3} className="my-1 shado1"> 
<Card className='shado'> 
<Link to={"/jcm"} style={{textDecoration:"none"}}>
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/Jewellery-Cutting-Machine.png' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>Jewellery Cutting Machine</h4> 
	   
	</Card.Body>
	</Link> 
</Card> 
</Col> 
<Col xs={12} md={6} lg={3} className="my-1 shado1"> 
<Card className='shado'> 
<Link to={"/jsm"} style={{textDecoration:"none"}}>
	<Card.Img 
		variant="top"
		src= 
'./Images/Product Img/jewellery-laser-soldering-machine.png' 
		alt="GeeksforGeeks Logo"
	/> 
	<Card.Body> 
	<h4 className='text-center'>Jewellery Soldering Machine</h4> 
	   
	</Card.Body>
	</Link> 
</Card> 
</Col> 

<Col xs={12} md={6} lg={3} className="my-1 shado1"> 
  <Card className='shado'> 
  <Link to={"/gtm"} style={{textDecoration:"none"}}>
	  <Card.Img 
		  variant="top"
		  src= 
'./Images/Product Img/Gold-Testing-Machine.png' 
		  alt="GeeksforGeeks Logo"
	  /> 
	  <Card.Body> 
	  <h4 className='text-center my-3'>Gold Testing Machine</h4> 
		 
	  </Card.Body> 
	  </Link>
  </Card> 
</Col> 

  </Row> 
</Container> 
 
  </div>

  )
}

export default Products
