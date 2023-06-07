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
          This website takes place in the context of the Cassiopée project, which aims to raise awareness of cybersecurity among researchers. Our project consists of creating a cybersecurity guide for researchers, gathering valuable information such as appropriate certifications tailored to their level, resources like scientific articles or theses, and upcoming events and conferences on the subject.<br/>
          The goal of this project is to provide researchers, especially novice researchers, with a platform that centralizes information in the field of cybersecurity. A significant part of this project will involve research and synthesis of existing resources in these different areas. Both synthesis and thematic work are necessary to make the guide user-friendly and ensure that the information is easily accessible. <br/>
          <strong>This site aim to be alimented over the time.</strong> <br/>
          Developped & alimented by: <strong>Sarah R. & Thomas P.</strong>
        </p>
        <div className="flex max-w-xs">
          <img src="images/Cassioplogo.png" alt="Cassiopée logo" />
        </div>
      </div>


    </div>
  )
}

export default About