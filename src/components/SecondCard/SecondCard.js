import React from "react";
import Classes from "./SecondCard.module.css";

const SecondCard = () => {
  return (
    <div className={Classes.bigbox}>
      <div className={Classes.rectangle}>
        <div></div>
        <div>SignUp</div>
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there
        </p>
      </div>
      <div className={Classes.rectangle}>
        <div></div>
        <div>Choose Coupon</div>
        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
      </div>
      <div className={Classes.rectangle}>
      <div></div>
        <div>Grab Coupon</div>
        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
      </div>
    </div>
  );
};

export default SecondCard;
