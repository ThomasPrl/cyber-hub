import React from 'react'

function About() {
  return (
    <div>
      <h1 className="page-title">
        <span className='text-gradient text-5xl'>About</span>
      </h1>

      {/* <div className="flex flex-wrap m-0 p-0 justify-between mt-10 items-center max-w-2xl"> */}
      <div className="flex pt-10">
        <p>

          This website exists in the context of a Cassiopée Project, a student project which aims to raise awareness of cybersecurity among researchers.<br/>
          Our project consists in creating a Cybersecurity guide for researchers, by gathering such as certifications tailored to their level, resources like scientific articles or theses, upcoming events, and conferences.<br/>
          The goal of this project is to provide researchers, especially novice researchers, with a platform that centralizes information in the field of cybersecurity. A significant part of this project involves researching and synthesizing existing resources in these different areas, to make a clear, comprehensive, and user-friendly guide. By ensuring that the information is easily accessible and articulate, we want to shed light on different cybersecurity domains, allowing newcomers to have a better understanding of the challenges related to them.<br/>
          <strong>The objective is to keep this website up-to-date over time. </strong> <br/>
          Developed & maintained by <strong>Sarah R. & Thomas P.</strong>
        </p>
        <div className="flex max-w-xs">
          <img src="images/Cassioplogo.png" alt="Cassiopée logo" />
        </div>
      </div>


    </div>
  )
}

export default About