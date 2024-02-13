import React from 'react'
import classes from './Table.module.css'
import OfferImage from '../../assets/image (3).png'

const Table = () => {
  return (
    <div className={classes.tablecontainer}>
      <div className={classes.tablewrapper}>
        <div><img src={OfferImage} alt='offer'/></div>
        <div>
            <h1>Popular Categories</h1>
            <table>
    <tbody>
      <tr>
        <td>Flight</td>
        <td>Bus</td>
        <td>Entertainment</td>
        <td>Jewellary</td>
      </tr>
      <tr>
        <td>Medicine</td>
        <td>Hosting</td>
        <td>Flowers</td>
        <td>Beauty</td>
      </tr>
      <tr>
        <td>OTT</td>
        <td>Bills</td>
        <td>Kids</td>
        <td>Travel</td>
      </tr>
      <tr>
        <td>Food</td>
        <td>Eyewear</td>
        <td>Lifestyle</td>
        <td>Kitchen</td>
      </tr>
      <tr>
        <td>Recharge</td>
        <td>Electronics</td>
        <td>Hotel</td>
        <td>Footwear</td>
      </tr>
      <tr>
        <td>Lab</td>
        <td>Education</td>
        <td>Services</td>
        <td>Furniture</td>
      </tr>
      <tr>
        <td>Fashion</td>
        <td>Pizza</td>
        <td>Bike</td>
        <td>Novelties</td>
      </tr>
    </tbody>
  </table>
        </div>
      </div>
    </div>
  )
}

export default Table
