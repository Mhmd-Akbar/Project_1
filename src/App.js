// import React, { useRef } from 'react';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Follower from "./components/Follower";
import Main from "./components/Main";
import Plans from "./components/Plans";
import Location from "./components/Location";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Subscibe from "./components/Subscribe";

function App() {

  // const LinkRef = useRef(null);

  // const goto = (ref) => {
  //   window.scrollTo ({
  //     top : ref.offsetTop,
  //     left: 0,
  //     behavior : 'smooth'
  //   })
  // }

  return (
    <>
      <Navbar/>
      <Header/>
      <Follower/>
      <Main/>
      <Plans/>
      <Location/>
      <Review/>
      <Subscibe/>
      <Footer/>
    </>
  );
}

export default App;
