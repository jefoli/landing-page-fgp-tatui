import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { History } from '../Pages/History';
import { PostGraduation } from '../Pages/PostGratuation';
import { ExtensionCourses } from '../Pages/ExtensionCourses';
import { NotFound } from '../Pages/NotFound';
import { Home } from '../Pages/Home';

export default function RoutesSistem() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<History />} />
        <Route path="post-graduation" element={<PostGraduation />} />
        <Route path="extensions-courses" element={<ExtensionCourses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
