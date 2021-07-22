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
// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // ...
// };
// firebase.initializeApp(config);

function App() {
  const [productList,setProductList] = useState([]);

  // useEffect(() => {
  //   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
  //     if(!user) {
  //       console.log('user is not login');
  //       return;
  //     }

  //     console.log('Logged in user: ',user.displayName);
  //   });
  //   return () => unregisterAuthObserver(); 
  // }, []);

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