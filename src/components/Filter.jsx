import React, { useContext, useEffect,useRef } from 'react'
import '/css/filter.css'
import { Container, Row,Col } from 'react-bootstrap';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';
import { useLocation } from 'react-router-dom';

const Filter = () => {

    const {TheemsRef,OptionExample,Cart,HeroOneJson,HeroTwoJson,HeroThreeJson,HeroOne,setHeroOne,HeroTwo,setHeroTwo,HeroThree,setHeroThree} = useContext(ShopContext);
 
  

    $(document).ready(function(){

        $('.topwear').mouseover(function(){
            $('#dropdown_menu_1').show();
    
        });
        $('.topwear').mouseout(function(){
            $('#dropdown_menu_1').hide();
            // $('.topwear').css('display','none');
        });
    
    
        $('.bottomwear').mouseover(function(){
            $('#dropdown_menu_2').show();
        });
        $('.bottomwear').mouseout(function(){
            $('#dropdown_menu_2').hide();
        });
    
    
        $('.themes').mouseover(function(){
            $('#dropdown_menu_3').show();
        });
        $('.themes').mouseout(function(){
            $('#dropdown_menu_3').hide();
        });
    
    });

  

  return (
      <>
      <div className="filter">
        <Container fluid>
            <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
            <nav className="conter_2">
              
                    <ul className="ul_1">
                         <OptionExample />
                        {/* <li className="topwear"><Link to='/TopWear' id="dropdown_1">Topwear</Link> */}
                            {/* <li className=""> */}
                        {/* </li> */}

                         {/* <li className="topwear">
                        <li className="">  */}
                        {/* </li>  */}



                        {/* <li className="bottomwear"><Link to='/BottomWear' id="dropdown_2">Bottomwear</Link>
                            
                        </li>
                        <li className="themes"><a href="#" id="dropdown_3">Themes</a>
                            <ul id="dropdown_menu_3">
                                <li><a href="#">One Piece</a></li>
                                <li><a href="#">Attack On Titans</a></li>
                                <li><a href="#">Demon Slayer</a></li>
                            </ul>
                        </li> */}
                       
                    </ul>
                    <div className="search_and_cart" >
                      
                        <Link to='/AddCart' id="add_cart" >Cart({Cart.length})</Link>
                    </div>
                </nav>
            </Col>
            </Row>
        </Container>
      </div>
      </>
)
}

export default Filter
