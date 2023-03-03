import React from "react";
import './sponser.css';

const SponserSection = () =>{
    return (
        <>
        <div className="container">
            <h1 className="header-text text-focus-in">Partners and Sponsors</h1>
            <div className="image-section image-1" style={{"background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-middle">lorem ipsum dolor sit</div>

            <div className="image-section image-2" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-left">lorem ipsum dolor sit</div>

            <div className="image-section image-3" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-right">lorem ipsum dolor sit</div>

            <div className="image-section image-4" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-left">lorem ipsum dolor sit</div>

            <div className="image-section image-5" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-right">lorem ipsum dolor sit</div>

            <div className="image-section image-6" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-left">lorem ipsum dolor sit</div>

            <div className="image-section image-7" style={{"position":"relative","background": "url('https://picsum.photos/553/357')"}}></div>
            <div className="image-description desc-right">lorem ipsum dolor sit</div>
        </div>
        </>
    )
}

export default SponserSection;