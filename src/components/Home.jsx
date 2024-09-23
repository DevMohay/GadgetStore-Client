import React from "react";
import Hero from "./Hero/Hero";
import Brands from "./Patnersheep/Brands";
import NewLaunch from "./NewLaunch/NewLaunch";
import HotPhones from "./hotPhones/hotPhones";

function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewLaunch />
      <HotPhones/>
    </>
  );
}

export default Home;
