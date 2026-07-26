import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo from '/images/BrandName.png'
import '/css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <Container fluid>
            <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
            <div className='footerContainer'>
                <ul>
                    <li className='LogoAndName'><img src={Logo} className='LogoImg' alt="" /></li>
                    <li>Start Up Company</li>
                    <li>From Thanjavur</li>
                </ul>
                {/* <ul>
                    <li><h3>Company</h3></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookie Policy</a></li>
                </ul> */}
                <ul>
                    <li><h3>Contact us</h3></li>
                    <li><LocationOnIcon/>Thanjavur</li>
                    <li><WhatsAppIcon/>9894334194</li>
                    <li><Link to="https://www.instagram.com/omg_prabakar/" target="_blank"><InstagramIcon/>@omg_prabakar</Link></li>
                    <li id="emailfont"><EmailIcon/>Brothers2001@gmail.com</li>
                     <li><InstagramIcon/></li>
                    {/* <li><a href="">Partner with us</a></li> */}
                    {/* <li><InstagramIcon/><FacebookIcon/><LinkedInIcon/><TwitterIcon/></li> */}
                </ul>
                {/* <ul>
                    <li><h3>Branches</h3></li>
                    <li>Chennai</li>
                    <li>Coimbatore</li>
                    <li>Salem</li>
                    <li>Thanjavur</li>
                    <li>Trichy </li>
                </ul> */}
            </div>
            </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
