import { useState } from 'react'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
//import styles from './ColumnForm.module.scss'

const ColumnForm = props =>{

    const [title, setTitle] = useState('');
    const [icon, setIcon] =   useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title, icon: icon});
        setTitle('');
        setIcon('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Title: <TextInput type= "text" value= {title} onChange = {e=> setTitle(e.target.value)}/></label>
            <label> Icon: <TextInput type= "text" value= {icon}  onChange = {e=> setIcon(e.target.value)} /></label>
            <Button>Add column</Button>
        </form>
    )
    
}

export default ColumnForm;