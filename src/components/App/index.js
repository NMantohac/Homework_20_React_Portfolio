import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import About from '../About';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Footer />
  </Router>
);

export default App;
