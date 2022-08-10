import styles from './Card.module.scss'
import styless from '../Column/Column.module.scss'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { cardFavorite } from '../../redux/store'
import shortid from 'shortid';

const Card = props =>{

    const dispatch =useDispatch();
    const id = props.id

    const buttonToggleFavorite =()=>{

       

        dispatch(cardFavorite({id}))
        


    
    }

    
    return(
        <li className={styles.card}>{props.title}
            <button onClick={buttonToggleFavorite}><span className = {clsx('fa fa-star-o ', props.isFavorite && styless.icon)}/></button>
        </li>
        
    )
}

export default Card;