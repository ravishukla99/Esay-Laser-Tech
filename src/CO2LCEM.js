import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function CO2LCEM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>CO2 LASER CUTTING & ENGRAVING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>CO2 LASER CUTTING & ENGRAVING MACHINE</span></h6>
	</div>
	<br/>
	
	<Container>
	<Row  style={{borderBottom:"2px solid #AED6F1"}}>
	<Col xl={6} xs={12}>
	<Image src=	'./Images/Product Img/Co2 Laser Cutting Machine.png' style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12}  style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Co2 Laser Cutting & Engraving Machine</h1>
  <hr/>
	
	<h4>Application :</h4>
	<Row >
	<Col>
	<li><i className="fa fa-check-circle"></i> Acrylic Cutting</li>
	<li><i className="fa fa-check-circle"></i> MDF Cutting</li>
		<li><i className="fa fa-check-circle "></i> Gift Artical</li>
		<li><i className="fa fa-check-circle"></i> Leather Cutting</li>
		<li><i className="fa fa-check-circle"></i> Stone Engraving</li>
		</Col>
		<Col>
		<li><i className="fa fa-check-circle"></i> Fabric Cutting</li>
		<li><i className="fa fa-check-circle"></i> Rubber Engraving</li>
		<li><i className="fa fa-check-circle"></i> Trophy</li>
		<li><i className="fa fa-check-circle"></i> Sign Board</li>
		</Col>
		</Row>

		<h4 className='my-3'>Specification :</h4>
		<div className="table-responsive mb-3 ">
		<table class="table table-bordered table-striped table-hover producttable">
			<tbody>
				<tr>
					<th>Cutting Area</th>
					<td>1300x900, 1300x2500, 900x600 MM & Customized</td>
				</tr>
				<tr>
					<th>Laser Tube</th>
					<td>80, 100, 130, 150, 200 W</td>
				</tr>
				<tr>
					<th>Laser Source</th>
					<td>Sealed Glass Co2 Laser Tube</td>
				</tr>
				<tr>
					<th>Cooling System</th>
					<td>Water Cooling</td>
				</tr>
				<tr>
					<th>Working Table</th>
					<td>Blade / Honey Comb</td>
				</tr>
				<tr>
					<th>Operating System</th>
					<td>Win 7/8/10/11</td>
				</tr>
				<tr>
					<th>Interface</th>
					<td>Udisk, Usb, Ethernet</td>
				</tr>
				<tr>
					<th>Supported File</th>
					<td>PLT, DXF, BMP, JPG, GLF, PNG.</td>
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
	
	<Image src="./Images/Application-img/co2lcm-Appli.jpg" style={{ width: "100%",margin:"20px 0px" }} />
</Col>
</Row>
</Container>
</>
  )
}

export default CO2LCEM
