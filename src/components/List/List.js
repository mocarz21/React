import styles from './List.module.scss';
import Column from '../Column/Column'
const List = () =>{
    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>interesting thinghs i want to check out!</p>
            <section className={styles.columns}>
                <Column title="Books" icon="book"/>
                <Column title="Movies" icon="gamepad"/>
                <Column title="Games" icon="film"/>
            </section>
        </div>
    )
}

export default List;