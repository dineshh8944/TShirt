import React, { useContext } from 'react'
import { ShopContext } from '../App'
import '/css/AddCartTable.css'

const AddCartView = ({ product,allTables }) => {
    const { Cart, setCart} = useContext(ShopContext);

    
    const RemoveCart = (proId) => {
        setCart(Cart.filter((e) => e.Id !== proId));
        
    };

    return (
        <>
            <td className='td_1'><p>{Cart.length}</p></td>
            <td className='td_2'>
                <img src={product.Image} alt={product.Type} /> {/* Added descriptive alt text */}
            </td>
            <td className='td_3'>
                <h3>{product.Type}</h3>
            </td>
            <td className='td_4'>
                <p>{product.Quantity}</p>
            </td>
            <td className='td_5'>
                <button onClick={() => RemoveCart(product.Id)}>Remove Cart</button>
            </td>
            <td className='td_6'>
                <p><span>Rs.</span>{product.Price}</p>
            </td>
        </>
    )
}

export default AddCartView;
