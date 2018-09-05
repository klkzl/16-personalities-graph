import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="form">
      <input
        type="text"
        name="inputValue"
        placeholder="What needs to be done?"
        autoComplete="off"
        maxLength="25"
        minLength="3"
        // pattern="^[\p{L}\p{N} ]*$"
      />
      <button>
        <i className="icon-plus"></i>
      </button>
    </div>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form;