import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function UVLMM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>UV LASER MARKING MACHINE
	</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>UV LASER MARKING MACHINE
	</span></h6>
</div>
	<br/>UVLMM

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/UV-Laser-machine.png' 
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12}  style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>UV Laser Marking Machine</h1>
  <hr/>
  
  <h4>Application</h4>
  <Row class="list-style-two list-style-two-3 mb-40">
  <Col>
	  <li><i class="fa fa-check-circle"></i> Mobile Accessories</li>
	  <li><i class="fa fa-check-circle"></i> Electronic Components</li>
	  <li><i class="fa fa-check-circle"></i> Cosmetic Industries</li>
	  <li><i class="fa fa-check-circle"></i> Sensitive Material</li>
	  <li><i class="fa fa-check-circle"></i> Glass Engraving</li>
	  <li><i class="fa fa-check-circle"></i> Crystal Engraving</li>
	 </Col> 
	 <Col>
	  <li><i class="fa fa-check-circle"></i> PCB Engraving</li>
	  <li><i class="fa fa-check-circle"></i> Semi Conductor</li>
	  <li><i class="fa fa-check-circle"></i> Ceramic Engraving</li>
	  <li><i class="fa fa-check-circle"></i> Paper Board</li>
	  <li><i class="fa fa-check-circle"></i> Polymer Material</li>
	  <li><i class="fa fa-check-circle"></i> Coating Film</li>
   </Col>
	  </Row>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
	<table class="table table-bordered table-striped table-hover producttable">
	<tbody>
		<tr>
			<th>Coating Film</th>
			<td>100x100, 175x175, 300x300 MM & Customized</td>
		</tr>
		<tr>
			<th>Laser Power</th>
			<td>3, 5, 10, 15 W</td>
		</tr>
		<tr>
			<th>Supported File</th>
			<td>PLT, DXF, JPG, PNG.</td>
		</tr>
		<tr>
			<th>Working Volt</th>
			<td>Single Phase 220-230V / 50HZ (Earthing Req)</td>
		</tr>
		<tr>
			<th>Dimension (L X W X H)</th>
			<td>3 x 4 x 4 feet</td>
		</tr>
		<tr>
			<th>Weight</th>
			<td>150kg</td>
		</tr>
	</tbody>
</table>

	
<div class="table-responsive mb-3">
	

</div>



	</div>
	<h4 className='my-3'>Application</h4>
	<Image src="/Images/Application-img/uvlmm-Appli.jpg" style={{ width: "100%" }} />
	</Col>
	</Row>
	</Container>
	
</>
  )
}

export default UVLMM
