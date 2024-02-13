import React, { Fragment } from "react";
import Cards from '../Cards/Cards'
import classes from "./Grids.module.css"; // Add your CSS module
import ScrollBar from "../ScrollBar/ScrollBar";

const YourComponent = () => {
  return (
    <Fragment>
    <div className={classes.container}>
      <div className={classes.row}>
        {/* Top Row */}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className={classes.row}>
        {/* Bottom Row */}
        <Cards/>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
    <ScrollBar/>
    </Fragment>
  );
};

export default YourComponent;
