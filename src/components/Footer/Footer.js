import React from "react";
import LogoImage from "../../assets/logo (1).png";
import classes from "./Footer.module.css";
import { GoTriangleRight } from "react-icons/go";
import PlayStoreImage from '../../assets/btn.png'
import AppStoreImage from '../../assets/btn (1).png'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src={LogoImage} alt="logo" className={classes.logopic}/>
        <p>Lorem Ipsum is simply dummy of the printing and type setting.</p>
        <div className={classes.appImage}><img src={AppStoreImage} alt="appstore"/></div>
        <div className={classes.appImage}><img src={PlayStoreImage} alt="playstore"/></div>
      </div>
      <div className={classes.footerbox}>
        <h1>Company</h1>
        <ul>
        <li><GoTriangleRight/>About Us</li>
          <li><GoTriangleRight/>Privacy Policy</li>
          <li><GoTriangleRight/>Terms</li>
          <li><GoTriangleRight/>Blogs</li>
          <li><GoTriangleRight/>Branding</li>
          <li><GoTriangleRight/>Career</li>
          </ul>
      </div>
      <div className={classes.footerbox}>
        <h1>General</h1>
        <ul>
          <li><GoTriangleRight/>Partner With Us</li>
          <li><GoTriangleRight/>Write to Us</li>
          <li><GoTriangleRight/>Mobile App</li>
          <li><GoTriangleRight/>Site map</li>
        </ul>
      </div>
      <div className={classes.footerbox}>
        <h1>Pages</h1>
        <ul>
          <li><GoTriangleRight/>Amazon Offer</li>
          <li><GoTriangleRight/>Google Pay Offers</li>
          <li><GoTriangleRight/>PayPal Offers</li>
          <li><GoTriangleRight/>PhonePe Offers</li>
          <li><GoTriangleRight/>Festivals Offers</li>
          <li><GoTriangleRight/>Bank Offers</li>
        </ul>
      </div>
      <div className={classes.footerbox}>
        <h1>More</h1>
        <ul>
          <li><GoTriangleRight/>City Offers</li>
          <li><GoTriangleRight/>Brand Offers</li>
          <li><GoTriangleRight/>Product Deals</li>
          <li><GoTriangleRight/>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
