import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchName } from '../../redux/store';
const SearchForm = () => {

    const [search, setSerch] = useState('')

    const dispatch = useDispatch()
    
    const searchTitle =e=>{
        e.preventDefault();
        dispatch(searchName({type: 'SEARCH', search}))
        setSerch('')
        console.log('ss', search)
        
    }


    return(
        <form className={styles.searchForm} onSubmit={searchTitle}>
            <TextInput placeholder="Search.." type = "text" value= {search} onChange = {e => setSerch(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
}

export default SearchForm;