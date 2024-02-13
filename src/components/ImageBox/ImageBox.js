import React from "react";
import styles from "./ImageBox.module.css";
import TravelImage from '../../assets/travelimage.png'
import SpecialImage from '../../assets/special.png'
import GirlImage from '../../assets/girl.png'
import OfferImage from '../../assets/offer1.png'
import ScrollBar from "../ScrollBar/ScrollBar";

const ImageBox = () => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.topRow}>
        <div className={styles.imageContainer}>
          <img src={GirlImage} alt="GirlImage" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src={OfferImage} alt="OfferImage" className={styles.image} />
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.imageContainer}>
          <img src={SpecialImage} alt="SpecialImage" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <img src={TravelImage} alt="TravelImage" className={styles.image} />
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default ImageBox;
