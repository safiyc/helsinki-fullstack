import React from 'react';

const Total = ({ course }) => {
  // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

  const sumReduced = course.parts.reduce((a, b) => {
    return { exercises: a.exercises + b.exercises }
  });  // returns an obj w/key exercises: sumtotal; 'return a.exercises + b.exercises' will return NaN bc 2nd iteration 'a.exercises' doesnt exist

  const exercisesTotal = sumReduced.exercises;  // extract num val from obj

  return (
    <>
      {/* <p>Number of exercises {sum}</p> */}
      <p>Number of exercises reducer {exercisesTotal}</p>
    </>
  );
};

export default Total;