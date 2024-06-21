import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Albums />} />
            <Route path="/album/:id" element={<Photos />} />
        </Routes>
    </div>
  );
}

export default App;
