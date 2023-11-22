import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={NewsList} />
          <Route path="/add" component={AddNews} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
