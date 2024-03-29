import React from 'react';

function App() {
  return (
    <div className="background-container">
      <div className="centered-content">
        <div className="hero-image">
          <h1 className="title">Welcome to Space Blossom Studio</h1>
          <p className="description">
            This is a place where food is made using delicious science and inspired by astronomy and flowers, powered by tech.
          </p>
          <div className="button-container">
            <button className="btn">
              <span>Explore the cosmic kitchen</span>
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
