import styles from './Column.module.scss'
import Card from    '../Card/Card'
import CardForm from '../CardForm/CardForm'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store'
import shortid from 'shortid';

const Column = props =>{
    
    const cards = useSelector(state => getFilteredCards(state, props.id));
    const newId=shortid()
    const setCardId =(id) =>{

        if(!id){
            console.log('jeste')
            return(
                id
            )
        }else return(newId)
            
    }
   
    return( 
        <article className={styles.column}>
            <h2 className={styles.title}><span className = {styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>  
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={setCardId(card.id)}/>)}
            </ul>
            <CardForm columnId={props.id} action={props.action}/>
            
        </article>
    )
}

export default Column;