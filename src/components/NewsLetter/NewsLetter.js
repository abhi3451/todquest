import React from "react";
import Classes from "./NewsLetter.module.css";
import FormImage from "../../assets/form-img.png";

const NewsLetter = () => {
  return (
    <div className={Classes.newsletter}>
      <div className={Classes.newsform}>
      <div className={Classes.Image}>
        <img src={FormImage} alt="form" />
      </div>  
      <div className={Classes.form}>
        <div className={Classes.formText}>
          <h1 className={Classes.headTitle}>Subscribe to our Newsletter!</h1>
          <p className={Classes.paragraph}>Be the first to get exclusive offers ands the latest news</p>
          <input className={Classes.input} type="text" placeholder="Enter your email address"/>
          <button type="submit">Subscribe</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsLetter;
