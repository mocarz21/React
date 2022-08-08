import { useState } from 'react'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props =>{

    const [title, setTitle] = useState('');
    const [icon, setIcon] =   useState('');

    const dispatch =useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon}));
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