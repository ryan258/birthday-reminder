import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  // put the list (array) in a state variable (people)
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        {/* count the array */}
        <h1 className="h3">{people.length} birthdays today</h1>
        {/* pass the list of people through a people prop */}
        <List people={people} />
        <button onClick={() => console.log('you clicked me!')}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
