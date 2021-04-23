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
import Behaviour from './components/Behaviour';
import Courses from './components/Courses';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
            <Route path="/behaviour" component={Behaviour} />
            <Route path="/courses" component={Courses} />
            <Route path="/courses" component={Courses} />
            {/* <Route path="/our-team" exact component={Team} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
