import React from "react";
import Classes from "./Deals.module.css";
import gridImages from '../../assets/grid2.png'
import ScrollBar from "../ScrollBar/ScrollBar";

const Deals = () => {
  return (
    <div className={Classes.dealwrapper}>
      <div className={Classes.headertitle}>
      <p className={Classes.mains}>Deals Of The Day</p>
      </div>
      <img src={gridImages} alt="grid"/>
      <ScrollBar/>
    </div>
  );
};

export default Deals;