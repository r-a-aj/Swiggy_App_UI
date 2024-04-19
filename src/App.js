import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Category from "./components/Category";
import DeliverySection from "./components/DeliverySection";
import Header from "./components/Header";
import TopResturants from "./components/TopResturants";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <>
        <Header/>
        <Category/>
        <TopResturants/>
        <DeliverySection/>
        <Switch>
          <Route exact path="/Login" component={LoginPage} />
        </Switch>
      </>
    </BrowserRouter>
    </>
  )
}

export default App;
