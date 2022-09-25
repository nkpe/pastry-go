import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/static/Static.css';
import { Outlet } from 'react-router-dom';

import Header from './components/static/Header';
import Footer from './components/static/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
