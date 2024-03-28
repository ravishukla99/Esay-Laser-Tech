import React from 'react'
import "../App.css"
import { Image } from 'react-bootstrap';
function Whatsaapicon() {
  return (
	<div className='Whatsapp-Logo'>
	  
	  <a href='http://wa.me/+919824188918' target='_blank' style={{zIndex:"-1"}}><Image src="./Images/social media/whatsapp.png" style={{width:"65px"}} className='whatsapp-fixed'></Image></a>
	</div>
  )
}

export default Whatsaapicon