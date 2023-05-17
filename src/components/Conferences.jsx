import React, { useState, useEffect, useRef } from 'react'
import data from '../assets/data.json';
import ConferencesBoard from './ConferencesBoard';

console.log(data);

function Conferences() {


  const [isHovered, setIsHovered] = React.useState(false);
  const [conferences, setConferences] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setConferences(data), []);

  const filterFunc = ({themes, rank}) => {
    const tags = [];
    if(filters.length === 0){
       return true;
    }
    if(themes){
      tags.push(...themes);
    }
    if(rank){
      tags.push(...rank);
    }
    return filters.every((filter) => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    //If tag is already selected -> ignore it
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  const filteredConferences = conferences.filter(filterFunc);

  return (
    <div>
       <h1 className="page-title">
            <span className='text-gradient text-5xl'>Conferences</span>
        </h1>
        <span className='flex'>
          {/* <button 
          onClick={() => handleTagClick("A")}
          className='mr-4'
          >
            Date↑
          </button> */}
        </span>

        <span className='relative flex justify-end mt-8'>
          <span class="inline-flex items-center justify-center text-white transition-colors duration-150 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-700 cursor-default px-2 py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
          <span className='ml-2 font-bold text-sm'>Acceptance</span>
          </span>
          {isHovered && (
            <span className="max-w-sm absolute bg-blue-100 -mt-24 mr-2 text-sm text-black px-2 py-1 rounded shadow">
              An <span className='font-bold'>Acceptance Rate</span> is the percentage of meeting requests which are accepted at a given conference. It's calculated per year. Here, the acceptance rate was caclulated on the year <span className='underline'>2020</span>.
            </span>
          )}
        </span>
        {filters.length > 0  && (
          <div className='flex bg-white shadow-md my-8 p-6 rounded'>
            {filters.map((filter) => (
              <span 
                onClick={() => handleFilterClick(filter)}
                className='cursor-pointer mr-4 text-blue-500 bg-blue-100 p-2 rounded lg:mb-0'>
                ✕ {filter}
                {/* Display of the filters, for the rank we check if the filter includes A or B */}
                {/* ✕ {filter.includes("A") || filter.includes("B") ? `Rank: ${filter.split(':')}` : filter} */}
              </span>
            ))}
            <button
              onClick={clearFilters}
              className='font-bold text-gray-700 ml-auto'>
              Clear
            </button>
          </div>
        )}
        {conferences.length === 0 ? (
          <p>Conferences are loading...</p>
        ) : (
          filteredConferences.map((conference) => (
            <ConferencesBoard
              conference={conference} 
              key={conference.id} 
              handleTagClick={handleTagClick}
            />))
        )}

    </div>
  )
}

export default Conferences