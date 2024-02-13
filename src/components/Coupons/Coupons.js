import React from 'react'

import classes from './Coupons.module.css'
import CouponsImage from '../../assets/coupons.png'
import Bar from '../Bar/Bar'
import Applicationimage from '../../assets/application download (1).png'

import Table from '../Table/Table'


const Coupons = () => {
  return (
    <div>
      <div className={classes.maintitle}><h1>How it Works?<Bar/></h1></div>
      <div className={classes.coupons}>
       <img src={CouponsImage} alt='coupons'/>
      </div>
      <div className={classes.promotionImage}>
        <img src={Applicationimage} alt='application'/>
      </div>
      <div className={classes.table}>
       <Table/>
      </div>
    </div>
  )
}

export default Coupons
