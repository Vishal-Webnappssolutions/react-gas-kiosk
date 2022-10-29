import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  )
}

export default App