import * as React from 'react';

const FormField = ({ label, type }) => {
  return (
    <div
      style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}
    >
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default FormField;
