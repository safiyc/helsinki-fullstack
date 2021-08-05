import React from 'react';

import Part from './Part';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <div>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
      <Total course={course} />
    </div>
  );
};

export default Course;