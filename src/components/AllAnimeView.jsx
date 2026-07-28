import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import { Container, Row,Col } from 'react-bootstrap';
import '/css/ViewDetials.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


export default function AllAnimeImages() {


const {TheemsRef,TopId,PickUp,CurrencyRupeeIcon,FilProductPick,setFilProductPick,filteredAnime} = useContext(ShopContext);

    console.log("TopId:", TopId);
     console.log("FilProductTop:", FilProductPick);

    const [pickOne,setPickOne] = useState(true);
    const [pickTwo,setPickTwo] = useState(false);
    const [pickThree,setPickThree] = useState(false);

    function PickOne(){
        setPickOne(true);
        setPickTwo(false);
        setPickThree(false);
    }
    function PickTwo(){
        setPickOne(false);
        setPickTwo(true);
        setPickThree(false);
    }
    function PickThree(){
        setPickOne(false);
        setPickTwo(false);
        setPickThree(true);
    }

      //  useEffect(() => {
      //           setFilProductPick(PickUp.filter((u) => u.Id === PickId));
           
      //   }, [PickId, PickUp]);

        useEffect(() => {
                   const dataAnime = filteredAnime.filter(item => item.id === TopId);
                   setFilProductPick(dataAnime);
                //    localStorage.setItem("FilProductPick", JSON.stringify(dataAnime));

                 }, [ TopId]);

        
        $(document).ready(function(){
            $('.Size-S').click(function(){
                $('.Size-S').css('background-color','#8da700');
                $('.Size-M').css('background-color','#fff');
                $('.Size-L').css('background-color','#fff');
                $('.Size-XL').css('background-color','#fff');
                $('.Size-S').css('color','#fff');
                $('.Size-L').css('color','#000');
                $('.Size-M').css('color','#000');
                $('.Size-XL').css('color','#000');
            });
    
            $('.Size-M').click(function(){
                $('.Size-S').css('background-color','#fff');
                $('.Size-M').css('background-color','#8da700');
                $('.Size-L').css('background-color','#fff');
                $('.Size-XL').css('background-color','#fff');
                $('.Size-M').css('color','#fff');
                $('.Size-L').css('color','#000');
                $('.Size-S').css('color','#000');
                $('.Size-XL').css('color','#000');
            })
    
            $('.Size-L').click(function(){
                $('.Size-S').css('background-color','#fff');
                $('.Size-M').css('background-color','#fff');
                $('.Size-L').css('background-color','#8da700');
                $('.Size-XL').css('background-color','#fff');
                $('.Size-L').css('color','#fff');
                $('.Size-M').css('color','#000');
                $('.Size-S').css('color','#000');
                $('.Size-XL').css('color','#000');
            })
    
            $('.Size-XL').click(function(){
                $('.Size-S').css('background-color','#fff');
                $('.Size-M').css('background-color','#fff');
                $('.Size-L').css('background-color','#fff');
                $('.Size-XL').css('background-color','#8da700');
                $('.Size-XL').css('color','#fff');
                $('.Size-M').css('color','#000');
                $('.Size-S').css('color','#000');
                $('.Size-L').css('color','#000');
            })
        })

  return (
    <div>
      <>
      <div className="body_1">
    <Container fluid>
    { FilProductPick.map((prods)=> (
                <Row key={prods.id}>
        <Col lg={6} md={6} sm={6} xs={12}>
            <div className="left_1">
                <div className="sub_img_1">
                    <img onClick={PickOne} src={prods.Image} alt="" />
                    <img onClick={PickTwo} src={prods.img2} alt="" />
                    <img onClick={PickThree} src={prods.img3} alt=""  />
                </div>
                <div className='bigImg'>
                        { pickOne === true ? <img src={prods.Image} alt="" /> : 
                        pickTwo === true ? <img src={prods.img2} alt="" /> :
                        pickThree === true ? <img src={prods.img3} alt="" />:""}
                </div>
                
                
            </div>
        </Col>
        <Col lg={6} md={6} sm={6} xs={12}>
        <div className="right_1">
                    <ul>
                        <li><h1>{prods.Offer}</h1></li>
                        <li>
                            <div className='RatingDiv'>
                                <h3>Rating</h3>
                                <Stack spacing={1}>
                                <Rating name="size-medium" defaultValue={4} />
                                </Stack>
                            </div>
                        </li>
                        <li><hr /></li>
                        <li><h5>Size</h5></li>
                        <li>
                            <button className='Size-S'>S</button><button className='Size-M'>M</button>
                            <button className='Size-L'>L</button><button className='Size-XL'>XL</button></li>
                        <li><hr /></li>
                        {/* <li><button className='DealBtn'>Limited time deal</button></li> */}
                        {/* <li><p>M.R.P : <span className='RateCros' > Rs . 1799.00 </span><br /><span> Rs . {prods.Price}.00</span><span className='sales' >sale</span></p></li> */}
                       <li><p>M.R.P : <span className='RateCros' > Rs .499.00 </span></p></li>
                         <li><p><span> Rs . {prods.Price}.00</span><span className='sales' >sale</span></p></li>
                        {/* <li><h1 className='Off'>50%</h1></li> */}
                        <li><hr /></li>
                        <li className='AllDelivery'>
                            {/* <div className='Delivery'>
                            <CurrencyExchangeIcon/><br />
                            5 days Return <br/> & Exchange
                            </div> */}
                            {/* <div className='Delivery'>
                                <PaymentIcon/><br />
                            Pay on Delivery
                            </div> */}
                            {/* <div className='Delivery'>
                                <LocalShippingIcon/><br />
                            Free Delivery
                            </div> */}
                            <div className='Delivery'>
                                <EmojiEventsIcon/><br />
                            Top Brand
                            </div>
                        </li>
                        <li><hr /></li>
                        <li className='Prodails'><h2>Product details</h2></li>
                        <li className='Prodails'><h4>Material composition :</h4>Cotton</li>
                        <li className='Prodails'><h4>Length :</h4>Standard Length</li>
                        <li className='Prodails'><h4>Neck style :</h4>Round Neck</li>
                        <li className='Prodails'><h4>State :</h4>Tamil Nadu</li>
                    </ul>
                </div>
        </Col>
        </Row> ))}
    </Container>
</div>
    </>
    </div>
  )
}
