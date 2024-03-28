import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function JSM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>JEWELLERY SOLDERING MACHINE
	</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>JEWELLERY SOLDERING MACHINE
	</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/jewellery-laser-soldering-machine.png' 
	style={{width:"100%"}} className='my-2'/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Jewellery Soldering Machine</h1>
  <hr/>
  <h4>Features</h4>

  <ul class="list-style-two list-style-two-3 mb-40">
  <li><i class="fa fa-check-circle"></i> NEW CREATIVE MAKING JEWELLERY</li>
  <li><i class="fa fa-check-circle"></i> FASTER PRODUCTION</li>
  <li><i class="fa fa-check-circle"></i> SAVES MAN POWER TIME</li>
  <li><i class="fa fa-check-circle"></i> NO RISK JEWELLERY DAMAGE</li>
</ul>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
	<table class="table table-bordered table-striped table-hover producttable">
	<tbody>
		<tr>
			<th>Laser Type</th>
			<td>ND Yag Pump Lamp</td>
		</tr>
		<tr>
			<th>Laser Power</th>
			<td>200 W (100, 400 W)</td>
		</tr>
		<tr>
			<th>Solder Joint</th>
			<td>0.2-2mm</td>
		</tr>
		<tr>
			<th>Optional Attachment</th>
			<td>CCD</td>
		</tr>
		<tr>
			<th>Working Volt</th>
			<td>Single Phase 220-230V / 50HZ (Earthing Req)</td>
		</tr>
		<tr>
			<th>Dimension (L X W X H)</th>
			<td>As per Customized</td>
		</tr>
	</tbody>
</table>
</div>


	<h4 className='my-3'>Application</h4>
	<Image src="./Images/Application-img/jsm-Appli.jpg" style={{ width: "100%" }} />

</Col>
</Row>
</Container>
</>
  )
}

export default JSM
