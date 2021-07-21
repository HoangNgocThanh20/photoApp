import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Photo from './features/Photo'

function App() {
  return (
    <div className="photo-app">
        <BrowserRouter>
          <Header />
          
          <Switch>
            <Redirect exact from="/" to="/photo" />
            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
          
        </BrowserRouter>
    </div>
  );
}

export default App;