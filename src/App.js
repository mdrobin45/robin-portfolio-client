import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import
  {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';

const App = () =>
{
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
