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
import Projects from './Components/Pages/Projects/Projects';
import SingleProject from './Components/Pages/SingleProject/SingleProject';
import Blog from './Components/Pages/Blog/Blog';

const App = () =>
{
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects/:id' element={<SingleProject />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
