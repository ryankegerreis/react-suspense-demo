import React, { Suspense } from 'react';
import './App.css';

const Image = React.lazy(() => import('./Image'))



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>...Loading</div>}>
          <Image />
        </Suspense>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
