import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm'
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';


const List = () =>{
    
   const columns = useSelector(getAllColumns); //czemu tak nie rozumiem jak działa chyba useSelector

    return(
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>interesting thinghs i want to check out!</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column}/>)} 
            </section>
            <ColumnForm />
        </div>
    )
}

export default List;