import styles from './NavBar.module.scss'

const NavBar =()=>{


    return(
        <nav>
            <container>
                <a href="/"><span className = {styles.icon + " fa fa-tasks hamburger" }/></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>  
            </container>
        </nav>
    )

}

export default NavBar;