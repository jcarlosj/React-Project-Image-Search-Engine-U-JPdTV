import React from 'react';

const Error = ({ message }) => (        // Destructuring Props
    <div class="alert alert-danger" role="alert">{ message }</div>
);

export default Error;