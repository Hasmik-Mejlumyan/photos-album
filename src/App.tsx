import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Albums from "./pages/Albums";

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Albums />} />
        </Routes>
    </div>
  );
}

export default App;
