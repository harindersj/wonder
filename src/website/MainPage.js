import { AppBar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import SocialWidget from './SocialWidget'
import "./websiteStyle.css"
import myPic from "./image/myPic.JPG"
import ImageCards from './ImageCards';
import ImageConatainer from './ImageConatainer';
const MainPage = () => {
    const images=[1,1,1,1,1,1,1,1]
    const WidgetIcon = [{ link: "", icon: LinkedInIcon }, { link: "", icon: YouTubeIcon }, { link: "", icon: GitHubIcon }, { link: "", icon: InstagramIcon }, { link: "", icon: CodeIcon }]
    return <>
        <div className='frontBlock'>
            <div className='block1'>
                <img src={myPic} />
            </div>
            <div className='block2'>
                <Typography variant='h4'>
                    Harinder Singh
                </Typography>
                <Typography variant="body1">
                    (Web Developer)
                </Typography>
                <Grid container className='socialblock'>
                    {WidgetIcon.map(media => {
                        return <Grid><SocialWidget sm={6} lg={4} icon={media.icon} /></Grid>
                    })}

                </Grid>
            </div>
        </div>
        <div className='imageContainer'>
            <div>Gallary</div>
            <ImageConatainer/>
        </div>

    </>

}

export default MainPage