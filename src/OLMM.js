import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function OLMM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>ONLINE LASER MARKING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>ONLINE LASER MARKING MACHINE</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/online laser marking machine.png' 
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Online Laser Marking Machine</h1>
  <hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		
	<table class="table table-bordered table-striped table-hover producttable">
	<tbody>
		<tr>
			<th>Laser Type</th>
			<td>Fiber Laser, Co2 Laser, UV Laser</td>
		</tr>
		<tr>
			<th>Laser Power</th>
			<td>30 W (Optional 50, 100 W) / 30 W (Optional 60W) / 3 W (Optional 5/7 W)</td>
		</tr>
		<tr>
			<th>Supported File</th>
			<td>PLT, DXF, JPG, PNG</td>
		</tr>
		<tr>
			<th>Marking Speed</th>
			<td>1 to 200 Min / Meter</td>
		</tr>
		<tr>
			<th>Working Volt</th>
			<td>Single Phase 220-230V/50HZ (Earthing Req)</td>
		</tr>
	</tbody>
</table>
	
<div class="table-responsive mb-3">
	

</div>



	</div>
	<h4 className='my-3'>Application</h4>
	<Image src="./Images/Application-img/olmm-appli.png" style={{ width: "100%" }} />

</Col>
</Row>
</Container>
</>
  )
}

export default OLMM