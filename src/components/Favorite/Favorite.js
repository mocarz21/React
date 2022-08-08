import styles from './Favorite.module.scss' //miało byc inaczej zrobione poprzez children i nowy komponent
import PageTitle from '../PageTitle/PageTitle';

const Favorite =() =>{

    return(
        <container class={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
        </container>
    )

}

export default Favorite;