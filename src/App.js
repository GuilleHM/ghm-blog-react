import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import SearchResults from './containers/SearchResults';
import Posts from './containers/Posts';
import SinglePost from './containers/SinglePost';
import Profile from './containers/Profile';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/perfil" component={Profile} />
        <Route path="/contacto" component={ContactUS} />
        <Route path="/resultados-busqueda" component={SearchResults} />
        <Route path="/publicaciones" component={Posts} />
        <Route path="/publicacion/:slug" component={SinglePost} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
