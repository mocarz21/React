import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import { useDispatch } from 'react-redux'
import { addNewList } from '../../redux/store'
import Button from '../Button/Button'


const ListForm = () =>{

    const [title, setTitle] =useState('')
    const [description, setDescryption] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(addNewList({title, description}))
        setTitle('')
        setDescryption('')
    

    }



    return(
        <form onSubmit={handleSubmit}>
            <label>Title:      <TextInput type= "text" value= {title}       onChange = {e => setTitle(e.target.value)}/></label>
            <label>Description:<TextInput type= "text" value= {description} onChange = {e=>setDescryption(e.target.value)} /></label>
            <Button>Add list</Button>
        </form>
    )

    


}

export default ListForm;