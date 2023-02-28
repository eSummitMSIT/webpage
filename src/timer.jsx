import React from "react";
import Countdown from 'react-countdown';
const Completionist = () => <span>You are good to go!</span>;

const Clock = () => {
  
    return (
        <>
        <div className="clockDiv">
         <Countdown className="countDown" date={Date.now() + 50000000}>
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
            </div>
        </>
    )
}

export default Clock;