import React, { useState } from 'react';
import { CiTrophy } from 'react-icons/ci';
import { TfiTimer } from 'react-icons/tfi';
import { RiFireLine } from 'react-icons/ri';
import classes from './Tabs.module.css';



const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className={classes.bar}>
      <div
        className={`${classes.title} ${selectedTab === 0 ? classes.selected : ''}`}
        onClick={() => handleTabClick(0)}
      >
        <CiTrophy />
        <p>Popular Coupons</p>
      </div>
      <div
        className={`${classes.title} ${selectedTab === 1 ? classes.selected : ''}`}
        onClick={() => handleTabClick(1)}
      >
        <TfiTimer />
        <p>Ending Soon</p>
      </div>
      <div
        className={`${classes.title} ${selectedTab === 2 ? classes.selected : ''}`}
        onClick={() => handleTabClick(2)}
      >
        <RiFireLine />
        <p>Latest Coupons</p>
      </div>
   
    </div>
  );
};

export default Tabs;