import React, { useState, useEffect, useRef } from 'react'
import data from '../assets/data.json';
import ConferencesBoard from './ConferencesBoard';

function Conferences() {

  //Trie
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  //Popup
  const [isHovered, setIsHovered] = React.useState(false);

  //Filtre
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

  const sortConferences = (conferences) => {
    const sortedConferences = [...conferences];
  
    sortedConferences.sort((a, b) => {
      if (sortDirection === 'asc') {
        if (sortBy === 'date') {
          return new Date(a.date) - new Date(b.date);
        } else if (sortBy === 'deadline') {
          return new Date(a.deadline) - new Date(b.deadline);
        }
      } else {
        if (sortBy === 'date') {
          return new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'deadline') {
          return new Date(b.deadline) - new Date(a.deadline);
        }
      }
      return 0;
    });
  
    return sortedConferences;
  };
  const sortedConferences = sortConferences(filteredConferences);

  return (
    <div>
       <h1 className="page-title">
            <span className='text-gradient text-5xl'>Conferences</span>
        </h1>



        <span className='relative flex mt-10'>

{/* BOUTONS DE TRIE - BUG */}
          {/* <span className="flex max-w-sm">
            <button
                onClick={() => {
                  setSortBy('date');
                  setSortDirection(sortBy === 'date' && sortDirection === 'asc' ? 'desc' : 'asc');
                }}
                className={`flex justify-center items-center mr-4 text-white text-sm font-bold bg-blue-500 cursor-pointer focus:shadow-outline rounded-full px-2 py-1 ${sortBy === 'date' ? '' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar-fill" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <span className='pl-2'>Date {sortBy === 'date' && <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>}</span>
              </button>
              <button
                onClick={() => {
                  setSortBy('deadline');
                  setSortDirection(sortBy === 'deadline' && sortDirection === 'asc' ? 'desc' : 'asc');
                }}
                className={`flex justify-center items-center mr-4 ml-4 text-white text-sm font-bold bg-blue-500 cursor-pointer focus:shadow-outline rounded-full px-2 py-1 ${sortBy === 'deadline' ? '' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>

                <span className='pl-2'>Deadline {sortBy === 'deadline' && <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>}</span>
              </button>
           </span> */}
       

                  
          <span className="inline-flex items-center justify-center text-white transition-colors duration-150 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-700 cursor-default px-2 py-1 ml-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
          <span className='ml-2 font-bold text-sm'>Acceptance</span>
          </span>
          {isHovered && (
            <span className="max-w-sm absolute bg-blue-100 -mt-24   text-sm text-black px-2 py-1 rounded shadow ml-auto right-0">
              An <span className='font-bold'>Acceptance Rate</span> is the percentage of papers which are accepted at a given conference. It's calculated per year. Here, the acceptance rate was caclulated on the years <span className='underline'>2018 to 2022</span> (based on the most recent data).
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
          sortedConferences.map((conference) => (
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