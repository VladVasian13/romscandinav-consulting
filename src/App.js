import './App.css';
import { Routes,Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import AboutUs from './pages/aboutus';
import Contact from './pages/contactus/contactus';


function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
