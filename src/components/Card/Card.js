import React from "react";
import Classes from "./Card.module.css";
import Amazon from "../../assets/amazon.png";

const Card = () => {
return (
    <div className={Classes.card}>
    <div className={Classes.headtitle}>
        <div className={Classes.image}><img src={Amazon} alt="amazon" className={Classes.images}/></div>
     <div className={Classes.textletter}><p>Amazon</p></div>
    </div>
    <div className={Classes.texttitle}>
    <div className={Classes.text}><p>Flat 30% Off</p></div>
    </div>
    <div className={Classes.grabbtn}><button className={Classes.newbtn}>GRAB NOW</button></div>
    </div>
);
};

export default Card;
