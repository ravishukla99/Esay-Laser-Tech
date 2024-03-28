import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';

function FLMM() {
  return (
	  <>
	  <Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>
	FIBER LASER MARKING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>
	FIBER LASER MARKING MACHINE</span></h6>
</div>
	<br/>
<br/>
	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12} >
	<Image src= './Images/Product Img/Fiber- Laser-marking-Machine.png' style={{width:"100%"}}/>
	
	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Fiber Laser Marking Machine</h1>
  <hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
	<table className="table table-bordered table-striped table-hover producttable">
		<tbody>
			<tr>
				<th>Working Area</th>
				<td>100x100, 175x175, 250x250, 300x300 MM & Customized</td>
			</tr>
			<tr>
				<th>Laser Type</th>
				<td>Fiber Laser</td>
			</tr>
			<tr>
				<th>Laser Power</th>
				<td>20, 30, 50, 60, 100 W</td>
			</tr>
			<tr>
				<th>Operating System</th>
				<td>Win 7 / 8 / 10 / 11</td>
			</tr>
			<tr>
				<th>Supported File</th>
				<td>PLT, DXF, BMP, JPG, GLF, PNG.</td>
			</tr>
			<tr>
				<th>Working Volt</th>
				<td>Single Phase 220-230V / 50HZ (Earthing Req)</td>
			</tr>
		</tbody>
	</table>
	</div>
	<h4 className='my-3'>Application</h4>
	<Image src="./Images/Application-img/application.png" style={{ width: "100%" }} />

</Col>
</Row>
</Container>


						
	  </>
  )
}


export default FLMM
