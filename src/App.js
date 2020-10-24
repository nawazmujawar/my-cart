import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CategoryView from "./components/Categories/CategoryView";
import Search from "./components/Search";

import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import SearchView from "./components/SearchView";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/categories/:categoryId">
            <CategoryView />
          </Route>
          <Route path="/search/:searchQuery">
            <SearchView />
          </Route>
          <Route path="/view/:productId">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Categories />
            <Search />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
