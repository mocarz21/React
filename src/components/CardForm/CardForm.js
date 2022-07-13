import { useState } from 'react'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = props =>{  {/*Nie rozumiem skadsie wzielo props albo bardziej po co jak itd*/}

    const [title, setTitle] =useState('');

    const handleSubmmit =e =>{
        e.preventDefault();
        props.action({ title: title }, props.columnId); {/* ktory title wynika z czego juz sie zamotałem */}
        setTitle(' ')
    }

    return(
        <form className={styles.cardForm} onSubmit={handleSubmmit}>
            <TextInput type="text" value= {title} onChange = {e=>setTitle(e.target.value)} /> {/*nie wiem skad bierze się te e */}
            <Button>Add Card</Button>
        </form>
    )
} 

export default CardForm;