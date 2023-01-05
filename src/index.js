import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import { ComingSoon, ErrorPage, Hero, Signup } from './components/';

const router = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path="/comingsoon" element={<ComingSoon />} />
    <Route index path="/" element={<Hero />} />
    <Route path="/signup" element={<Signup />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);