import Campo from '../Campo/Campo';
import './Forms.css';
import { ReactComponent as Arrow } from './icon-arrow.svg';

import React from 'react';

export default function Forms() {
  return (
    <form className="forms">
      <Campo label="day" placeholder="dd" />
      <Campo label="month" placeholder="mm" />
      <Campo label="year" placeholder="yyyy" />
      <button type="submit" className="submit">
        <Arrow />
      </button>
    </form>
  );
}
