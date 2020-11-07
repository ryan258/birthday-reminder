import React from 'react';

// deconstruct the people data from the props being passed in from App
const List = ({ people }) => {
  return (
    <>
      {/* map over the array */}
      {people.map((person) => {
        // decontruct properties from each object in the array
        const { id, name, age, image } = person;
        // return a new array item with html and the person's data
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
