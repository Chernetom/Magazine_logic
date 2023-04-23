import './App.css';
import React from "react";
import Header from "./modules/Header/Header";
import Home from "./pages/Home/Home";
import {Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';

const App = () => {
  return (
      <div className={'app__wrapper'}>
          <Header />
          <Routes>
              <Route path ='/' element={ <Home />}/>
              <Route path ='/catalog' element={ <Catalog />}/>
          </Routes>
      </div>
  );
}

export default App;
