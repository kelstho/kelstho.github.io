import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Route exact path="/" component={Bio} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
