
import React from 'react';
import classes from './Categories.module.css';
import Fashion from '../../assets/fashion.png';
import Beauty from '../../assets/beauty care.png';
import Food from '../../assets/food.png';
import Toys from '../../assets/toys.png';
import Cloud from '../../assets/hosting.png';
import Gaming from '../../assets/gaming.png';
import Mobile from '../../assets/mobile.png';
import Travel from '../../assets/travel.png';
import Movies from '../../assets/movies.png';
import ScrollBar from '../ScrollBar/ScrollBar';
import Card from '../Card/Card'

const Categories = () => {
  return (
    <div className={classes.containingbox}>
      <div className={classes.headerbar}>
        <h1 className={classes.title}>Coupon By Categories</h1>
      </div>
      <div className={classes.allboxcontainer}>
        <div className={classes.ninebox}>
          <div className={classes.boxes}>
            <div>
              <img src={Fashion} alt='fasion' />
              <p>Fashion</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Food} alt='food' />
              <p>Food</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Beauty} alt='beauty' />
              <p>Beauty</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Toys} alt='toys' />
              <p>Toys</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Cloud} alt='cloud' />
              <p>Cloud</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Gaming} alt='gaming' />
              <p>Gaming</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Mobile} alt='mobile' />
              <p>Mobile</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Travel} alt='travel' />
              <p>Travel</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div>
              <img src={Movies} alt='movies' />
              <p>Movies</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottombox}>
        <div className={classes.offer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <ScrollBar/>
      </div>
     
    </div>
  );
};

export default Categories;
