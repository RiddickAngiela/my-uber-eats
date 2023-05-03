import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import HeadlineCard from "./componets/HeadlineCard";
import Food from "./componets/Food";
import Category from "./componets/Category";

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <HeadlineCard />
     <Food />
     <Category />
    </div>
  );
}

export default App;
