import { Paper } from '@mui/material'
import React from 'react'
const SocialWidget = (props) => {
  return (
     <Paper className='widgetStyle'>
        <props.icon color='primary'/>
        {/* <a href=''>{props.name}</a> */}
</Paper>
  )
}

export default SocialWidget