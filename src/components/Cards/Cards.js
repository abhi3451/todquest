    import React from "react";
    import Classes from "./Cards.module.css";
    import Amazon from "../../assets/amazon.png";

    const Cards = () => {
    return (
        <div className={Classes.card}>
        <div className={Classes.headtitle}>
            <h1 className={Classes.headertitle}>Upto 60% off on Appliances</h1>
            <div className={Classes.image}><img src={Amazon} alt="amazon" className={Classes.images}/></div>
            <div className={Classes.text}>Upto 60% off on summer Appliances</div>
        </div>
        <div><button>GRAB NOW</button></div>
        </div>
    );
    };

    export default Cards;
