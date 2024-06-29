import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage';
import LandingPage from './Components/LandingPage';
import Producr3 from './Components/Producr3';
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product4 from './Components/Product4';
import Product5 from './Components/Product5';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Product1.jsx' element={<Product1 />} />
        <Route path='/Product2.jsx' element={<Product2 />} />
        <Route path='/Producr3.jsx' element={<Producr3 />} />
        <Route path='/Product4.jsx' element={<Product4 />} />
        <Route path='/Product5.jsx' element={<Product5 />} />
      </Routes>
    </div>
  );
}

export default App;
