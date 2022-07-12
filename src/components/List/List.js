import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
//import { useEffect } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm'

const List = () =>{
    
    const [columns, setColumns] = useState([
        {id: 1, title: 'Books', icon: 'book'},
        {id: 2, title: 'Movies', icon: 'film'},
        {id: 3, title: 'Games Test', icon: 'gamepad'}
    ]);
    // useEffect(() =>{

    //     setTimeout(() =>{
    //         setColumns([...columns, {id:4, title:'test column'}]);
    //     }, 2000);
    // }, []);

    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title}]);
    };


    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>interesting thinghs i want to check out!</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon}/>)}
            </section>
            <ColumnForm action={addColumn}/>
        </div>
    )
}

export default List;