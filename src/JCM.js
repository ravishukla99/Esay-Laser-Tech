import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function JCM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>JEWELLERY CUTTING MACHINE
	</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>JEWELLERY CUTTING MACHINE
	</span> </h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src=	'./Images/Product Img/Jewellery-Cutting-Machine.png' 
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
  <h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Jewellery Cutting Machine</h1>
  <hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		
	<table class="table table-bordered table-striped table-hover producttable">
                                <tbody>
                                    <tr>
                                        <th>Laser Type</th>
                                        <td>German Source</td>
                                    </tr>
                                    <tr>
                                        <th>Cutting Size</th>
                                        <td>100 x 100 MM & Customized</td>
                                    </tr>
                                    <tr>
                                        <th>Cutting Depth</th>
                                        <td>0.01 Micron - 1.5mm</td>
                                    </tr>
                                    <tr>
                                        <th>Optional Attachment</th>
                                        <td>Rotary / Fume Extractor</td>
                                    </tr>
                                    <tr>
                                        <th>Working Volt</th>
                                        <td>Single Phase 220-230V / 50HZ (Earthing Req)</td>
                                    </tr>
                                </tbody>
								</table>

</div>

	<h4 className='my-3'>Application</h4>
	<Image src="/Images/Application-img/jcm-Appli.jpg" style={{ width: "100%" }} />

</Col>
</Row>
</Container>
</>
  )
}

export default JCM
