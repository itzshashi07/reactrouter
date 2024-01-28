import './App.css';
import Navbar from './Component/Navabar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Contact from './Page/Contact';
import Homepage from './Page/Homepage';
import About from './Page/About';
import Login from './Page/Login';
import Profile from './Page/Profile';
import Notfound from './Page/Notfound';
function App() {
  return (
    <div>

     <Navbar/>
     <Routes>
     <Route path='/' element={<Homepage/>}> 
     <Route path='about' element={<About/>}>
     <Route path='contact' element={<Contact/>} />
     </Route>
    
     <Route path='Login' element={<Login/>}/>
     <Route path='Profile' element={<Profile/>}/>
     </Route>
     
   
     <Route path='*' element={<Notfound/>} />
    </Routes>
    </div>
  );
}

export default App;
