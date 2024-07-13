// src/components/AnotherComponent.js
import React, { useState, useEffect } from 'react';
import Loader from './common/Loader';

const AnotherComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <div>Content loaded!</div>;
};

export default AnotherComponent;
