import React, { useEffect } from 'react';
import { Switch, Route,  } from 'react-router-dom';
import Contract from '../src/Contract';
import Payment from '../src/payment';
import GetProvider from '../src/GenContext';
import $ from 'jquery';
window.jQuery = $;

function Init() {  
  
  return (
    <GetProvider>
      <Switch>
        <Route exact path="/" component={Contract}/>
        <Route exact path="/payment/:uuid" component={Payment}/>
      </Switch>
    </GetProvider>
  );
}

export default Init;
