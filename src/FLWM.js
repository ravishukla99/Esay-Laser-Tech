import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
export default function FLWM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>FIBER LASER WELDING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>FIBER LASER WELDING MACHINE</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/Laser-Welding-Machine.png'
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Fiber Laser Welding Machine</h1>
  <hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		

	
	<div class="table-responsive">
	<table class="table table-bordered table-striped table-hover producttable">
		<tbody>
			<tr>
				<th>Laser Power</th>
				<td>1000 W (Optional 1500, 2000, 3000 W)</td>
			</tr>
			<tr>
				<th>Operational Power</th>
				<td>1 Phase (230V-50Hz)</td>
			</tr>
			<tr>
				<th>Wobble Weld Width</th>
				<td>Up to 5 mm</td>
			</tr>
			<tr>
				<th>Wobble Frequency</th>
				<td>Up to 300 Hz</td>
			</tr>
			<tr>
				<th>Fiber Cable Length</th>
				<td>10 Meters</td>
			</tr>
			<tr>
				<th>Parameter Presets</th>
				<td>100+</td>
			</tr>
			<tr>
				<th>Cooling Style</th>
				<td>Water Cooling</td>
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
