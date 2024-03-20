// App.js
import React from 'react';

function App() {
  return (
    <div className="background-container">
      <div className="centered-content">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Space Blossom Studio</h1>
        <p className="text-gray-700 mb-4">
          This is a place where food is made using delicious science and inspired by astronomy and flowers, powered by tech.
        </p>
        <div className="button-container">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center shadow-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <span>Explore the cosmic kitchen</span>
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
