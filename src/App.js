import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import ProjectDetails from './Components/ProjectDetails';

function App() {
  return (
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/projectdetails' element={<ProjectDetails/>}/>

      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
