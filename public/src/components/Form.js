import React from 'react';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="inputValue"
      placeholder="What needs to be done?"
    />
    <button>Add</button>
  </form>
);

export default Form;