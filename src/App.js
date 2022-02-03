import './App.css';
import { Routes,Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import AboutUs from './pages/aboutus';
import Contact from './pages/contactus/contactus';
import Footer from './components/footer/footer';


function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
