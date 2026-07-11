import React, { useState,useContext,useEffect,useRef, use } from 'react'
import { ShopContext } from '../App';
import AddCartView from './AddCartView';
import '/css/AddCartTable.css'
import { Container, Row, Col } from 'react-bootstrap';
import ProductNotFoundImg from './../assets/pro_img_2.png' 
import '/css/ProductNotFoundImg.css'

const AddCart = () => {
    
    const {Cart} = useContext(ShopContext);
    const [total,setTotal] = useState(0);
    

    const AllTable = useRef(null)
    const AllProductNot = useRef(null)
    console.log(AllTable.current);
    useEffect(()=>{
        setTotal(Cart.reduce((allTotals,currentPrice)=>allTotals+parseInt(currentPrice.Price),0))
        
        if(Cart.length > 0){ 
            AllTable.current.classList.add("tableAlls");
            AllProductNot.current.classList.add("AllProductNotFoud");
        }else if(Cart.length === 0){
            AllTable.current.classList.remove("tableAlls");
            AllProductNot.current.classList.remove("AllProductNotFoud");
        }
      },[Cart])

  return (
    <>
<div className='CartNotDisplayAll' ref={AllProductNot}>
<div className="CartNotDisplay">
  <Container>
    <Row>
    <Col lg={12} md={12} sm={12} xs={12}>
    <div className='ProNotShowDisplay'>
      <h1> Product Not Found</h1> 
      <div className='ImgNot'>
        <img className='ProductNotFoundImg' src={ProductNotFoundImg} width={300} alt="" />
      </div>
    </div>
    </Col>
    </Row>
  </Container>
</div>
</div>

      <div className='allCart' ref={AllTable}>
      <table>
        <thead>
        <tr>
            <th className='td_1'>No</th>
            <th className='td_2'>Product</th>
            <th className='td_3'>Name</th>
            <th className='td_4'>Quantity</th>
            <th className='td_5'>Remove Cart</th>
            <th className='td_6'>Price</th>
            
        </tr>
        </thead>
      {
        Cart.map((product)=>(
            <tbody>
                <tr>
 <AddCartView key={product.Id} product={product} allTables={AllTable}/>
                </tr>
            </tbody>
        ))
      }
      <tbody>
      <tr position='relative'>
            <td className='th_1' colSpan={1}></td>
            <td className='th_2' colspan={1}></td>
            <td className='th_3' colspan={1}></td>
            <td className='th_4' colspan={1}></td>
            <td className='th_5' colspan={1}>Total Price</td>
            <td className='th_6' colspan={1}><span>Rs.</span>{total}</td>
        </tr>
        </tbody>
      </table>

    </div>
    </>
  )
}

export default AddCart
