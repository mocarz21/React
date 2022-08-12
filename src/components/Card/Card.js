import styles from './Card.module.scss'
import styless from '../Column/Column.module.scss'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { cardFavorite } from '../../redux/store'
import { removeCard } from '../../redux/store'

const Card = props =>{

    const dispatch =useDispatch();
    const id = props.id

    const buttonToggleFavorite =()=>{

        dispatch(cardFavorite({id}))
      
    }

    const buttonRemoveCard = () =>{
    dispatch(removeCard({id}))
    }
    
    return(
        <li className={styles.card}>{props.title}
            <button onClick={buttonToggleFavorite}><span className = {clsx('fa fa-star-o ', props.isFavorite && styless.icon)}/></button>
            <button onClick={buttonRemoveCard}><span className = {clsx('fa fa-trash ')}/></button>
        </li>
        
        
    )
}

export default Card;