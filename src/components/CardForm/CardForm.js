import { useState } from 'react'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import { useDispatch } from 'react-redux';

const CardForm = props =>{  
   
    const [title, setTitle] =useState('');

    const dispatch =useDispatch();
    const columnId = props.columnId
   

    const handleSubmmit =e =>{
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', newCard: {title , columnId}}); 
        setTitle(' ')
        //dispatch(addCard({title, columnId})); //czemu nie moge wstawic props.columnId
    }

    return(
        <form className={styles.cardForm} onSubmit={handleSubmmit}>
            <TextInput type="text" value= {title} onChange = {e=>setTitle(e.target.value)} /> 
            <Button>Add Card</Button>
        </form>
    )
} 

export default CardForm;