import React from 'react'
import Globe from './Globe'


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

export default Home