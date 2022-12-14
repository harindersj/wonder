import { AppBar, Box, Button, Grid, Paper, Typography } from '@mui/material'
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
import WeightConverter from './Weightconverter/WeightConverter';
import Weather from './weather/Weather';
import Board from './Tic2/Board';
const MainPage = () => {
    const images = [1, 1, 1, 1, 1, 1, 1, 1]
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
        {/* <div className='imageContainer'>
            <div>Gallary</div>
            <ImageConatainer/>
        </div> */}
        <div className='OuterBlock'>
            <label>Weight Converter</label>
            <div>
                <WeightConverter />
            </div>
        </div>

        <div className='OuterBlock '>
            

        <div className='OuterBlock ' style={{background:'gray'}}>
            <label>TicTacToe</label>
            <div>
                <Board/>
            </div>
        </div> 

        <div className='OuterBlock' style={{border:'0.5rem solid white',padding:"0.4rem"}}>
        <label>Todo List App</label>
        <a link="https://codesandbox.io/s/todolist-j87se" ><button varient="contained" className="linkButton">Click here to see</button></a>
        </div>




    </>

}

export default MainPage
