import { useState } from 'react'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = props =>{  
    console.log(props)
    const [title, setTitle] =useState('');

    const handleSubmmit =e =>{
        e.preventDefault();
        props.action({ title: title }, props.columnId); 
        setTitle(' ')
    }

    return(
        <form className={styles.cardForm} onSubmit={handleSubmmit}>
            <TextInput type="text" value= {title} onChange = {e=>setTitle(e.target.value)} /> 
            <Button>Add Card</Button>
        </form>
    )
} 

export default CardForm;