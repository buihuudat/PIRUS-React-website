import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Components from './components';

import './index.scss';

export default function App() {
  return (
    <Router>
      <Components.Nav />
      <Routes>
        <Route path="/" element={<Components.HomePage />} />
      </Routes>
    </Router>
  )
}
