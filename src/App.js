import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <main>
      <section className="container">
        <h1 className="h3">0 birthdays today</h1>
        <List />
        <button onClick={() => console.log('you clicked me!')}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
