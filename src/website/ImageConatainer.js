import { Grid } from '@mui/material'
import React from 'react'
import image1 from "./gallary/1.webp"
import image2 from "./gallary/2.webp"
import image3 from "./gallary/3.webp"
import image4 from "./gallary/4.webp"
import image5 from "./gallary/5.jpeg"
import image6 from "./gallary/6.jpeg"
import image7 from "./gallary/7.jpeg"
import image8 from "./gallary/8.jpeg"
import image9 from "./gallary/9.jpeg"
import image10 from "./gallary/10.jpeg"
import ImageCards from './ImageCards'

const ImageConatainer = () => {
    const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
  return (
    <Grid container className='socialblock'>
   {images.map(photos=>{
                    return <Grid sm={12} md={3}  lg={3}>
                    <ImageCards pic={photos} /></Grid>
                })}

</Grid>
  )
}

export default ImageConatainer