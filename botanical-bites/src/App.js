// App.js
import React from 'react';
import backgroundImage from './assets/space-background.jpg';

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Space Blossom Studio</h1>
        <p className="text-gray-700 mb-4">
          This is a a cosmic kitchen where food is made using delicious science and inspired by astronomy and flowers, powered by tech.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
