import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './page/Homepage';
import About from './page/About';
import Shop from './page/Shop';
import Contact from './page/Contact';

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
