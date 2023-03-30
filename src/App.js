import React from 'react';
import FormField from './components/FormFields';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Sandwich Pre-Order Form</h1>
      <form>
        <FormField label="Name" />
        <FormField label="Email" />
        <FormField label="Phone Number" />
        <FormField label="Sandwich Qty" />
        <input type="submit" />
      </form>
    </div>
  );
}
