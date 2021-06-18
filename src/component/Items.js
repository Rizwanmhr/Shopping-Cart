import React, {useContext} from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {CartContext} from './Cart';

const Items = ({id,description,title,img,price,quantity}) => {
     const {removeItems, increment, decrement} = useContext(CartContext);
  
    return (
        <>
            

            <div className='items-info'>
    <div className='product-img'>
        <img src={img} alt='img' />
    </div>
    <div  className='title'>
<h2>  {title}  </h2>
<p> {description} </p>
    </div>
    <div className='add-minus-quantity'>


<RemoveIcon className='minus' onClick={() => decrement(id)} />
<input type='text' placeholder={quantity} />
<AddIcon className='add' onClick={() => increment(id)} />
    </div>
    <div className='price'>
<h3> {price} </h3>
    </div>
    <div className='remove-item'>
        <DeleteIcon className='del' onClick={() => removeItems(id)} />
        
    </div>
   
    
    </div>

<hr />
        </>
    )
}

export default Items
