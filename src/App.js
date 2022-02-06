import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import Cases from './pages/casesInterface';
import Questions from './pages/questions';
import { Fragment } from 'react';

export default function App() {
    return (
        <Fragment>
          <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home />}></Route>
            <Route path = '/cases' element={<Cases/>}></Route>
            <Route path = '/profile' element={<Profile/>}></Route>
            <Route path = '/questions/:caseId' element={<Questions/>}></Route>
          </Routes>
          </BrowserRouter>
        </Fragment> 
    )
}

