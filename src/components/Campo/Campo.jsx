import './Campo.css';

import React from 'react';

export default function Campo({ label, placeholder }) {
  return (
    <div className="Campo">
      <label>{label}</label>
      <input type="number" placeholder={placeholder} />
    </div>
  );
}
