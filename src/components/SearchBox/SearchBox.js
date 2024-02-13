import React from 'react'
import classes from './SearchBox.module.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
   <div className={classes.searchContainer}>
    <div><SearchIcon/></div>
    <input type='text' placeholder='Search For brand,category,coupon'  className={classes.searchText} />
   </div>
  )
}

export default SearchBox
