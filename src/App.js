import React from "react";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Adopt from './components/Adopt';
import Training from './components/Training';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App vh-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/training" component={Training} />
            {/* <Route path="/our-team" exact component={Team} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
