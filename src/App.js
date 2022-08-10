
import List from './components/List/List';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favorite/>} />
          <Route path= "/about" element={<About/>} />
          <Route path="*" element={
            <main style={{padding:"1rem"}}>
                <p>Tu nic niema</p>
            </main>}/>
          <Route path= "/list/:listId" element={<List/>} />
        </Routes>  
      </Container>
    </main>
  );
}

export default App;
