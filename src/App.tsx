import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MyCarousel from './components/carousel/Carousel';
import SecondCarousel from './components/carousel/SecondCarousel';
import MyFooter from './components/footer/Footer';
import MyCard from './components/card/Card';
import CardList from './components/cardList/CardList';

function App() {
  return (
    <div className="App">
    <Navbar />
    <SecondCarousel/>
           <h1 className="text-4xl font-bold underline">
      Recommended for you
    </h1>
    
    <div>
    <CardList/>
    </div>
    <MyFooter/> 
    </div>
  );
}

export default App;
