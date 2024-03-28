import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';


function FLCM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>FIBER LASER CUTTING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>FIBER LASER CUTTING MACHINE</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/Fiber-Laser-Cutting-Machine.png'  alt="GeeksforGeeks Logo"
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Fiber Laser Cutting Machine</h1>
  <hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		

	
<div class="table-responsive mb-3">
	<table class="table table-bordered table-striped table-hover producttable">
		<tbody>
			<tr>
				<th>Laser Type</th>
				<td>Fiber Laser</td>
			</tr>
			<tr>
				<th>Working Area</th>
				<td>1500x3000, 2000x4000, 2000x6000, 2500x6500 MM & Customized</td>
			</tr>
			<tr>
				<th>Laser Power</th>
				<td>1000 W (Optional 1500, 2000, 3000, 6000, 12000, 20000 W)</td>
			</tr>
			<tr>
				<th>Laser Head</th>
				<td>Ray Tools - Autofocus</td>
			</tr>
			<tr>
				<th>Servo Motors</th>
				<td>Panasonic, Yaskawa</td>
			</tr>
			<tr>
				<th>Rack & Pinion</th>
				<td>YYC (Taiwan)</td>
			</tr>
			<tr>
				<th>Pneumatics Parts</th>
				<td>SMC (Japan)</td>
			</tr>
			<tr>
				<th>Maximum Travelling Speed</th>
				<td>120M/Per Min.</td>
			</tr>
		</tbody>
	</table>
</div>



	</div>
	<h4 className='my-3'>Application</h4>
	<Image src="./Images/Application-img/flcm-Application.png" style={{ width: "100%" }} />

</Col>
</Row>
</Container>
	
	</>
  )
}

export default FLCM
