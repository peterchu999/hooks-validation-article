import React from 'react';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>Sandwich Pre-Order Form</h1>
      <form>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <label>Name</label>
          <input />
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <label>Email</label>
          <input />
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <label>Phone Number</label>
          <input />
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <label>Sandwich Qty</label>
          <input />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
