import React from 'react';

const Error = ({ message }) => (        // Destructuring Props
    <small id="searchHelp" className="form-text text-danger">{ message }</small>
);

export default Error;