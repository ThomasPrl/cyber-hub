import React from 'react'
import Globe from './Globe'


// import styled from "styled-components";
// import { keyframes } from "styled-components";


function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col xl:flex-row xl:flex">
          <h1 className="text-center text-3xl leading-10 xl:text-left xl:p-20 xl:pt-12 xl:max-w-xl xl:pl-0 xl:text-5xl xl:leading-tight ">
            Here you will find everything you need about <span className='text-gradient'>Cybersecurity</span>
            <p className="text-center text-xl xl:text-left mt-3 xl:mt-2">
            Cassiopée Project
          </p>
          </h1>

        </div>
        <div className="-m-8 xl:m-auto xl:self-center">
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
  -moz-osx-font-xloothing: grayscale;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
*/
export default Home