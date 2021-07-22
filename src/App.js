import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SignIn from './features/Auth/pages/SignIn';
import Photo from './features/Photo';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCKTIpdvnADn5UG93Io318jVbFYcNZI5v4',
  authDomain: 'photo-app-f4b23.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  const [productList,setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const params = {
          _page:1,
          _limit:10
        }
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log('Failed to get Api',error);
      }
    }
    getProductList();
  },[])

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if(!user) {
        console.log('user is not login');
        return;
      }

      console.log('Logged in user: ',user.displayName);
      const token = await user.getIdToken();
      console.log('Logged in user token:',token);
    });
    return () => unregisterAuthObserver();
  }, []);


  return (
    <div className="photo-app">
        <BrowserRouter>
          <Header />
          
          <Switch>
            <Redirect exact from="/" to="/photo" />
            <Route path="/photo" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
          
        </BrowserRouter>
    </div>
  );
}

export default App;