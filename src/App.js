import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path ='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </header>
    </div>
  );
}

export default App;
