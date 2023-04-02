import React, { useState, useEffect } from 'react'
import data from '../assets/data.json';
import ConferencesBoard from './ConferencesBoard';

console.log(data);

function Conferences() {

  const [conferences, setConferences] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setConferences(data), []);

  const filterFunc = ({themes}) => {
    const tags = [];
    if(filters.length === 0){
       return true;
    }
    if(tags){
      tags.push(...themes);
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
        {filters.length > 0  && (
          <div className='flex bg-white shadow-md my-16 p-6 rounded'>
            {filters.map((filter) => (
              <span 
                onClick={() => handleFilterClick(filter)}
                className='cursor-pointer mr-4 text-blue-500 bg-blue-100 p-2 rounded lg:mb-0'>
                ✕ {filter}
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