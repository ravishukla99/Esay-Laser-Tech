import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function GTM() {
  return (
	<>
	<Whatsaapicon/>
	<br/><br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>
	GOLD TESTING MACHINE 
</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>GOLD TESTING MACHINE
	</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/Gold-Testing-Machine.png' 
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Gold Testing Machine</h1>
  <hr/>

  <h4>Features</h4>
  <ul class="list-style-two list-style-two-3 mb-40">
	  <li><i class="fa fa-check-circle"></i> 99.99% Accuracy</li>
	  <li><i class="fa fa-check-circle"></i> Result in 30 Sec</li>
	  <li><i class="fa fa-check-circle"></i> Result with Image of Jewellery</li>
	  <li><i class="fa fa-check-circle"></i> Dual Display (Optional)</li>
	  <li><i class="fa fa-check-circle"></i> Suitable for Bank & Jewellery</li>
	  <li><i class="fa fa-check-circle"></i> Bill Generation Facility</li>
  </ul>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		
	<table class="table table-bordered table-striped table-hover producttable">
	<tbody>
		<tr>
			<th>Time</th>
			<td>30 Sec</td>
		</tr>
		<tr>
			<th>Accuracy</th>
			<td>0.30%+/-</td>
		</tr>
		<tr>
			<th>Metals</th>
			<td>8</td>
		</tr>
		<tr>
			<th>Analysis Range</th>
			<td>1-99.99</td>
		</tr>
		<tr>
			<th>Collimator</th>
			<td>2mm</td>
		</tr>
		<tr>
			<th>Sample</th>
			<td>Solid, Liquid, Powder</td>
		</tr>
		<tr>
			<th>Application</th>
			<td>Jewellery, Bank</td>
		</tr>
	</tbody>
</table>
	
<div class="table-responsive mb-3">
	

</div>



	</div>
	<h4 className='my-3'>Application</h4>
	<Image src="/Images/Application-img/gtm-Appli.jpg" style={{ width: "100%" }} />

</Col>
</Row>
</Container>
</>
  )
}

export default GTM
