// Example usage in a component
import React from 'react';
import { formatCurrency, generateUniqueId, capitalizeFirstLetter, validateEmail, formatDate } from '../utils/helper';

const ExampleComponent = () => {
  const amount = 1234.56;
  const email = 'test@example.com';
  const date = new Date();

  return (
    <div>
      <p>Formatted Currency: {formatCurrency(amount)}</p>
      <p>Unique ID: {generateUniqueId()}</p>
      <p>Capitalized String: {capitalizeFirstLetter('hello')}</p>
      <p>Is Email Valid: {validateEmail(email) ? 'Yes' : 'No'}</p>
      <p>Formatted Date: {formatDate(date)}</p>
    </div>
  );
};

export default ExampleComponent;
