import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import VideoGrid from './components/VideoGrid';

function App() {
  return (
    <div>
      <Navbar />
      <VideoGrid />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
