import Campo from '../Campo/Campo';
import './Forms.css';

import React from 'react';

export default function Forms() {
  return (
    <form className="forms">
      <Campo label="day" placeholder="dd" />
      <Campo label="month" placeholder="mm" />
      <Campo label="year" placeholder="yyyy" />
    </form>
  );
}
