import React from 'react'
import { Button,Container,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
	<div>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>ERROR PAGE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>ERROR</span></h6>
</div>
	<br/>
	<Container className='text-cenetr'>
	<Image src="https://tse4.mm.bing.net/th?id=OIP.ndNF6LSow0QPdntjvDC3yAHaEm&pid=Api&P=0&h=180" style={{width:"80%",height:"60vh"}}/>
	</Container>
	<br/>
	<Button className='my-4'>
	<Link to={'/'} style={{color:"white", textDecoration:"none",margin:"5px"}}>Go Back Home Page</Link></Button>

	</div>
  )
}

export default ErrorPage
