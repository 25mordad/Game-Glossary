import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Recent from './components/Recent/Recent';
import Singlegame from './components/Singlegame/Singlegame';
import Papular from './components/Papular/Papular';

import './App.css';
import './index.css';



const App = () => {


  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/recent" exact component={Recent} />
            <Route path="/" exact component={Papular} />
            <Route path="/game/:id" component={Singlegame} />
            <Route path="/search/:name" component={Search} />

            <Route component={Notfound} />
          </Switch>
        </div>
    
      </BrowserRouter>
    </div>
  );


}


export default App;
