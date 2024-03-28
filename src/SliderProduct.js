import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

// important
// first install after working slider function
// npm install react-slick slick-carousel
function SliderProduct() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
	  };
  return (
	
<>





<Slider {...settings}>

	 
	  <Card className='shado1'> 
	  <Link to={"/flmm"} style={{textDecoration:"none"}}>
	    <Card.Img
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber- Laser-marking-Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			 
			
			  </Link>
			  </Card> 
			  
	  
		  <Card className='shado1'> 
		  <Link to={"/flcm"} style={{textDecoration:"none"}}>
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Fiber-Laser-Cutting-Machine.png'				  alt="GeeksforGeeks Logo"
			  /> 
			
			  </Link> 
		  </Card> 
	  

	  <Card className='shado1'> 
	  <Link to={"/flwm"} style={{textDecoration:"none"}}>
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/Laser-Welding-Machine.png'
			  alt="GeeksforGeeks Logo"
		  /> 
	
		  </Link>
	  </Card> 
  

  <Card className='shado1'> 
  <Link to={"/olmm"} style={{textDecoration:"none"}}>
	  <Card.Img 
		  variant="top"
		  src= 
		  './Images/Product Img/online laser marking machine.png' 
		  alt="GeeksforGeeks Logo"
	  /> 
	
	  </Link>
  </Card> 

   

  
		  <Card className='shado1'> 
		  <Link to={"/co2lcem"} style={{textDecoration:"none"}}>
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Co2 Laser Cutting Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
			
			  </Link>
		  </Card> 
	  
	  <Col xs={12} md={6} lg={3} className="my-1 shado1"> 
		  <Card className='shado1'> 
		  <Link to={"/co2lem"} style={{textDecoration:"none"}}>
			  <Card.Img 
				  variant="top"
				  src= 
				  './Images/Product Img/Co2 Engraving Machine.png' 
				  alt="GeeksforGeeks Logo"
			  /> 
		
			  </Link>
		  </Card> 
	  </Col> 

	  <Card className='shado1'> 
	  <Link to={"/flmm"} style={{textDecoration:"none"}}>
		  <Card.Img 
			  variant="top"
			  src= 
'./Images/Product Img/UV-Laser-machine.png' 
			  alt="GeeksforGeeks Logo"
		  /> 
		
		  </Link>
	  </Card> 
  

  
<Card className='shado1'> 
<Link to={"/jcm"} style={{textDecoration:"none"}}>
	<Card.Img 
		variant="top"
		src= 
		'./Images/Product Img/Jewellery-Cutting-Machine.png' 
		alt="GeeksforGeeks Logo"
	/> 

	</Link> 
</Card> 

<Card className='shado1'> 
<Link to={"/jsm"} style={{textDecoration:"none"}}>
	<Card.Img 
		variant="top"
		src= 
'./Images/Product Img/jewellery-laser-soldering-machine.png' 
		alt="GeeksforGeeks Logo"
	/> 

	</Link> 
</Card> 


  <Card className='shado1'> 
  <Link to={"/gtm"} style={{textDecoration:"none"}}>
	  <Card.Img 
		  variant="top"
		  src= 
'./Images/Product Img/Gold-Testing-Machine.png' 
		  alt="GeeksforGeeks Logo"
	  /> 
	 
	  </Link>
  </Card> 

{/* Add more images here */}
</Slider>


</>


  )
}

export default SliderProduct