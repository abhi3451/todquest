import React, { useState } from 'react';
import classes from './ScrollBar.module.css';

const ScrollBar = () => {
  const [selectedBar, setSelectedBar] = useState(0);

  const handleBarClick = (index) => {
    setSelectedBar(index);
  };

  return (
    <div className={classes.scrollwrapper}>
      <div
        className={`${classes.bar} ${selectedBar === 0 ? classes.selected : ''}`}
        onClick={() => handleBarClick(0)}
      ></div>
      <div
        className={`${classes.bar} ${selectedBar === 1 ? classes.selected : ''}`}
        onClick={() => handleBarClick(1)}
      ></div>
      <div
        className={`${classes.bar} ${selectedBar === 2 ? classes.selected : ''}`}
        onClick={() => handleBarClick(2)}
      ></div>
    </div>
  );
};

export default ScrollBar;