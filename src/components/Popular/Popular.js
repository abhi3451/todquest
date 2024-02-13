import React from 'react'
import classes from './Popular.module.css'
import PopularImage from '../../assets/popular.png'
import ImageBox from '../ImageBox/ImageBox'

const Popular = () => {
  return (
    <div className={classes.popularContainer}>
      <div className={classes.Image}><img src={PopularImage} alt='popular'/></div>
      <div className={classes.populararea}>
        <p className={classes.popularText}>Popular Membership</p>
      </div>
      <div className={classes.boxes}>
        <ImageBox/>
      </div>
    </div>
  )
}

export default Popular
