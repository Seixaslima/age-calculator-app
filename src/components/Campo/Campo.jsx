import './Campo.css';

import React from 'react';

export default function Campo({ label, placeholder }) {
  return (
    <div className="campo">
      <label>{label}</label>
      <input placeholder={placeholder} required={true} />
    </div>
  );
}
