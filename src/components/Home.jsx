import React from 'react'
import Globe from './Globe'

// import styled from "styled-components";
// import { keyframes } from "styled-components";


function Home() {
  return (
    
    <div className="home-container">
      <div className="landing-page">
        <div className="globe">
          <Globe/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Here you will find everything you need about <span className='text-gradient'>Cybersecurity</span>
          </h1>
          <p className="primary-text">
            Cassiopée Project
          </p>
        </div>
      </div>
      {/* <Cards/> */}
    </div>
  )
}



// const hue = keyframes`
//  from {
//    -webkit-filter: hue-rotate(0deg);
//  }
//  to {
//    -webkit-filter: hue-rotate(-360deg);
//  }
// `;

// Styled components for text gradient animation - based off https://codepen.io/caseycallow/pen/yMNqPY
// const AnimatedGradientText = styled.h1`
//   color: #f35626;
//   background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -webkit-animation: ${hue} 10s infinite linear;

//   font-size: clamp(3rem, 3vw, 3rem);
//   line-height: 4rem;
//   max-width: 400px;


//   text-rendering: optimizelegibility;

// `;
/*
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
*/
export default Home