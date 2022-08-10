import {  NavLink} from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar =()=>{


    return(
        <nav>
            <container>
                <a href="/"><span className = {styles.icon + " fa fa-tasks hamburger" }/></a>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive :undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive :undefined} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive :undefined} to="/about">About</NavLink></li>
                </ul>  
            </container>
        </nav>
    )

}

export default NavBar;