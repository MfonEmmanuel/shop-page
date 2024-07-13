// src/components/SomeComponent.js
import React from 'react';
import Button from './common/Button';

const SomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default SomeComponent;
