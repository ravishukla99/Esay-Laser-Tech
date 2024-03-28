import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/esm/Image'
import Whatsaapicon from './components/Whatsaapicon';
function CO2LEM() {
  return (
	<>
	<Whatsaapicon/>
	<br/>
	<div className='text-center' style={{backgroundImage:`url("./Images/background/all-bg.png")`, height:"50vh",width:"100%",backgroundSize:"cover"}}>
	<h1 className=' fw-bold' style={{color:"#ffff",paddingTop:"86px"}}>CO2 LASER ENGRAVING MACHINE</h1>
	<h6 style={{color:"#ffff" }} className="fw-bold">HOME / <span style={{color:" #61dafb"}}>CO2 LASER ENGRAVING MACHINE</span></h6>
</div>
	<br/>

	<Container>
	<Row style={{borderBottom:"2px solid #AED6F1 "}}>
	<Col xl={6} xs={12}>
	<Image src='./Images/Product Img/Co2 Engraving Machine.png'
	style={{width:"100%"}}/>
	

	</Col>


<Col xl={6} xs={12} style={{borderLeft:"2px solid #AED6F1 "}}>
<h1 className='fw-bold mt-3' style={{color:"#199AD8"}}>Co2 Laser Engraving Machine</h1>
<hr/>
	<h4 className='my-3'>Specification </h4>
	<div className="table-responsive mb-3 ">
		

	
	<div class="table-responsive">
	<table class="table table-bordered table-striped table-hover producttable1">
                                <tbody>
                                    <tr>
                                        <th>Model</th>
                                        <td>1. Wood Pecker</td>
                                        <td>2.Catwalk</td>
                                    </tr>
                                    <tr>
                                        <th>Engraving Area</th>
                                        <td>150x150, 300x300 MM</td>
                                        <td>450x450, 600x 600 MM</td>
                                    </tr>
                                    <tr>
                                        <th>Laser Tube</th>
                                        <td>30, 60 W</td>
                                        <td>80,100 W</td>
                                    </tr>
                                    <tr>
                                        <th>Laser Source</th>
                                        <td colspan="2">Metal Tube With Air Cooled / Glass Tube With Water Cooled</td>
                                    </tr>
                                    <tr>
                                        <th>Power Adjustment</th>
                                        <td colspan="2">1 To 100%</td>
                                    </tr>
                                    <tr>
                                        <th>Engraving Accuracy</th>
                                        <td colspan="2">
                                            0.01 </td>
                                    </tr>
                                    <tr>
                                        <th>Operting System</th>
                                        <td colspan="2">Win 7/8/10/11</td>
                                    </tr>
                                    <tr>
                                        <th>Interface</th>
                                        <td colspan="2">Udisk, Usb, Ethernet</td>
                                    </tr>
                                    <tr>
                                        <th>Supported File</th>
                                        <td colspan="2">PLT, DXF, BMP, JPG, GLF, PNG.</td>
                                    </tr>
                                    <tr>
                                        <th>Working Volt</th>
                                        <td colspan="2">Single Phase 220-230V/50HZ (Earthing Req)</td>
                                    </tr>
                                    <tr>
                                        <th>Optional Attachment</th>
                                        <td colspan="2">Rotary Device / Moving Table</td>
                                    </tr>
                                    <tr>
                                        <th>Dimension (L X W X H)</th>
                                        <td>3 x 2 x 4 feet</td>
                                        <td>6 x 2 x 5 feet</td>
                                    </tr>
                                    <tr>
                                        <th>Weight</th>
                                        <td>125kg</td>
                                        <td>300kg</td>
                                    </tr>
                                </tbody>
                            </table>
</div>



	</div>
	
	</Col>
	</Row>
	<h1 className='my-3 text-center ' style={{color:"red"}}>Application</h1>
	<Image src="./Images/Application-img/co2lem-appli.png" style={{ width: "100%" }} />
</Container>
</>
  )
}

export default CO2LEM