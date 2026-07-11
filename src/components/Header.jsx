import React, { useEffect, useRef, useState } from 'react';
import '/css/Header.css'
import Logo from '../assets/BrandName.png'
// import logoOne from '../assets/header_logos.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignModal from './SignModal';
import '/css/SignModal.css'


const Header = () => {
 const [showModal, setShowModal] = useState(false);
 const FormInnerDiv = useRef(null)


 useEffect(() => {
  if (FormInnerDiv.current) {
    if (showModal) {
      FormInnerDiv.current.classList.add("FormInnerDiv");
    } else {
      FormInnerDiv.current.classList.remove("FormInnerDiv");
    }
  }
}, [showModal]); // Depend on showModal instead

function BodyFormFix(){
  setShowModal(true)
  document.body.style.overflow = 'hidden'; // Disable body scroll
  
}

  return (
    <>
    <div className='header'>
      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
          <nav className="conter_1">
                    <ul>
                      
                        {/* <li id="logo"><img src={Logo} alt="" id='logo_image' /></li> */}
                        <li id="men"><Link to='/' id="men_color">Home</Link></li>
                       <li id="logo"><img src={Logo} alt="" id='logo_image' /></li>
                    </ul>
                    {/* <button onClick={BodyFormFix} id="sign_in">Sign In</button> */}
                    {/* <button><img src={Logo} alt="" id='logo_image' /></button> */}
                </nav>
                <SignModal showModal={showModal} setShowModal={setShowModal} FormInnerDiv={FormInnerDiv} />
          </Col>
        </Row>
      </Container>
    </div>
    </>
    
  )


}

export default Header
