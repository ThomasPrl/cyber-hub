import React from 'react'
import Globe from './Globe'

// import styled from "styled-components";
// import { keyframes } from "styled-components";


function Home() {
  return (
<div className="flex items-center justify-center">
  <div className="flex flex-col sm:flex-row items-center justify-center">
    <div className="flex flex-col sm:flex-row sm:flex">
      <h1 className="text-center text-3xl leading-10 sm:text-left sm:p-20 sm:pt-12 sm:max-w-xl sm:pl-0 sm:text-5xl sm:leading-tight ">
        Here you will find everything you need about <span className='text-gradient'>Cybersecurity</span>
        <p className="text-center text-xl sm:text-left mt-3 sm:mt-2">
        Cassiopée Project
      </p>
      </h1>

    </div>
    <div className="-m-8 sm:m-auto sm:self-center">
      <Globe/>
    </div>
  </div>
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