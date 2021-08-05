import React from 'react';

/*
  -App
    -Course
      -Heading
        -h2, course title
      -Part
        -p tag, part name and total exercises
        -p tag, part name and total exercises
    -Course
      -Heading
        -h2, course title
      -Part
        -p tag, part name and total exercises
        -p tag, part name and total exercises
*/

import Course from './Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Main Heading</h1>
      <div>
        {courses.map(course =>
          <Course key={course.id} course={course} />
        )}
      </div>
    </>
  );
}

export default App;