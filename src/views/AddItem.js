import '../components/additem-components/AddItem.scss';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const AddItem = ({dispatch}) => {
    const [itemName, setItemName] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [itemImage, setItemImage] = useState('');
    const [message, setMessage] = useState('');


    const onClick = () => {
        dispatch({type:'ADD_ITEM', payload: {name: itemName, category: itemCategory, price: itemPrice, image: itemImage}});
        setItemName('');
        setItemCategory('');
        setItemPrice('');
        setItemImage('');
        setMessage('Item Added Successfully!')
        setTimeout(() => {setMessage('')},2000)
        
   
    }

    return(

        <section className="BlackPink">

            <div className="AddItem-container">

                <h2>Add <span>Item</span></h2>
                <h2>{message}</h2>

                <div className="AddItem-container__form">

                    <label>Item Name</label>
                    <input type="text" placeholder='Input Item Name' value={itemName} onChange={(e) => {setItemName(e.target.value)}} required />

                    <label>Item Category</label>
                    <select placeholder = { itemCategory } value={itemCategory} onChange={(e) => {setItemCategory(e.target.value)}}>
                        <option >MENS</option>
                        <option>WOMENS</option>
                    </select>

                    <label>Item Image</label>
                    <input type="text" value={itemImage} placeholder='Input Item Image' onChange={(e) => {setItemImage(e.target.value)}} required/>

                    <label>Item Price</label>
                    <input type="number" value={itemPrice} onChange={(e) => {setItemPrice(e.target.value)}} placeholder='Input Item Price' required/>
                    <button type ="button" onClick={onClick}> Add Item </button>
                    <Link className="Additem-link" to ="/">Back to Home</Link>

                </div>

                
            </div>

        </section>
   
    )
}

export default AddItem;