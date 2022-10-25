import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Collatz from './components/Collatz';
import { useParams } from 'react-router-dom';
import MenuRutas from './components/MenuRutas';

export default class Router extends Component {
  render() {
    function CollatzElement(){
        var {numero}=useParams();

        return <Collatz numero={numero}/>
    }
    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collatz/:numero' element={<CollatzElement/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
