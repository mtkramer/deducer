import React from 'react';
import About from "./components/about";
import Navbar from "./components/navbar";
import Samples from "./components/samples";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Samples />
      <About />
    </div>
  );
}

export default App;
