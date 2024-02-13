import React from "react";
import todLogo from "../../assets/logo.png";
import navImage from "../../assets/image.png";
import classes from "./Header.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ScrollBar from "../ScrollBar/ScrollBar";

import Tabs from "../Tabs/Tabs";
import Categories from "../Categories/Categories";
import Deals from "../Deals/Deals";
import Popular from "../Popular/Popular";
import NewsLetter from "../NewsLetter/NewsLetter";
import Coupons from "../Coupons/Coupons";
import Footer from "../Footer/Footer";
import Grids from "../Grids/Grids";

const Header = () => {
  return (
    <div className={classes.container}>
      <header className={classes.wrapper}>
        <div className="logo">
          <img src={todLogo} alt="logo" />
        </div>
        <SearchBox />
        <div>
          <button type="button">Login/Sign Up</button>
        </div>
      </header>
      <nav className={classes.navbar}>
        <div className={classes.navlinks}>Home</div>
        <div className={classes.navlinks}>Deals</div>
        <div className={classes.navlinks}>Coupons</div>
        <div className={classes.navlinks}>Stores</div>
        <div className={classes.navlinks}>Contact Us</div>
      </nav>
      <div className={classes.contentContainer}>
        <div className={classes.imageContainer}>
          <div className={classes.offerImage}>
            <img src={navImage} alt="navImage" />

            <ScrollBar />
          </div>
        </div>
        <Tabs />
        <Grids />
        <Deals />
        <Categories />
        <Popular />
        <NewsLetter />
        <Coupons />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
