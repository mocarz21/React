import styles from './Card.module.scss'
import CardForm from '../CardForm/CardForm'


const Card = props =>{
    return(
        <li className={styles.card}>{props.title}</li>
    )
}

export default Card;