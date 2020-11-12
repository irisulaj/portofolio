import './App.css';

import React from "react";

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";

const App = () => {
  return (
    <>
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
    </>
  );
}

export default App;
