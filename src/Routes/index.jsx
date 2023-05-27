import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from '../Components/Footer';

export default function RoutesSistem() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" component={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
