import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const ConferencesBoard = ( {conference, handleTagClick }) => {

    const tags = [];
    
    if(tags){
        tags.push(...conference.themes);
    }

    return(

        <div className='flex flex-col bg-white shadow-md my-16 p-6 rounded lg:flex-row lg:my-4'>
            <div>
                <a href={conference.link} >
                    <img className="-mt-10 ml-5 mb-4 w-20 h-20 lg:mt-0 lg:h-24 lg:w-24 lg:my-0" src={conference.logo} alt={conference.title}/>
                </a>
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h3 className='font-bold text-lg text-blue-600'>
                    {conference.localisation}
                    <span className='bg-blue-500 text-blue-100 text-sm m-2 py-1 px-2 rounded-full'>
                        Acceptance: 
                        <span className='ml-1'>
                            {conference.acceptance}
                        </span>
                    </span>
                </h3>
                <a href={conference.link} className='font-bold text-xl my-2'>{conference.title}</a>
                <p className='text-gray-700'>
                    Deadline: {conference.deadline} · Date: {conference.date}
                </p>
            </div>
            <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-400 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 lg:mx-0 lg:justify-end'>
                {tags 
                    ? tags.map((tag) => (
                        
                        <span 
                        key={uuidv4()}
                        onClick={() => handleTagClick(tag)}
                        className='cursor-pointer text-blue-500 bg-blue-100 mr-4 mb-4 p-2 lg:my-0 rounded lg:mb-0'>
                            {tag}
                        </span>
                    )) : ''}
            </div>
        </div>
    )

}

export default  ConferencesBoard