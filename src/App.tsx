import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MyCarousel from "./components/carousel/Carousel";
import SecondCarousel from "./components/carousel/SecondCarousel";
import MyFooter from "./components/footer/Footer";
import MyCard from "./components/card/Card";
import CardList from "./components/cardList/CardList";
import SearchBar from "./components/searchBar/SearchBar";
import data from "./dummyData.js";

const url =
  "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondCarousel />
      <h1 className="text-4xl font-bold underline">Recommended for you</h1>
      <div>
      <CardList cardlist={[...data]} />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
