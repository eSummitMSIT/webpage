import React from "react";
import Countdown from 'react-countdown';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Completionist = () => <span>You are good to go!</span>;

const Clock = () => {
    const d = new Date("2023-03-08");
    const diff = d - Date.now();
    console.log(diff);
    return (
        <>
        <div className="clockDiv">
         <Countdown className="countDown" date={Date.now()+diff}>
      <Completionist />
    </Countdown>
            <div className="ulDiv">
                <ul >
                    <li id="days"> Days </li>
                    <li id="hr"> Hours </li>
                    <li id="min"> Min </li>
                    <li id="sec"> Sec </li>
                </ul>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/ecellmsit/" target="_blank"><InstagramIcon className="logo"/></a>
                <a href="https://www.linkedin.com/company/ecellmsit/" target="_blank"><LinkedInIcon className="logo"/></a>
                <a href="https://www.facebook.com/ecellmsit/" target="_blank"><FacebookIcon className="logo"/> </a>
                <a href="https://twitter.com/ecellmsit" target="_blank"><TwitterIcon className="logo"/></a>
                <a href="https://www.youtube.com/channel/UCnJxY5QKGvyvCqOZgKuOTaw/featured" target="_blank"><YouTubeIcon className="logo"/></a>

            </div>
            </div>
        </>
    )
}

export default Clock;