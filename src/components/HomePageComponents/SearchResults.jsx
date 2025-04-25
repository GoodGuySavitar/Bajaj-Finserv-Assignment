import React, { useRef, useEffect } from 'react'
import SearchResult from './SearchResult'

const SearchResults = ({ data, onClose }) => {
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      ref={searchResultsRef}
      className='absolute max-h-[calc(100vh-10rem)] z-10 overflow-y-auto top-14 left-1/2 -translate-x-1/2 w-[min(800px,90%)] border border-neutral-400 bg-white p-4 rounded-lg shadow-lg flex flex-col items-start justify-start gap-4'
    >
      {
        data.map((item) => (
          <SearchResult key={item.id} doctor={item} />
        ))
      }

      {
        data.length === 0 && (
          <p className="text-base text-neutral-700 bg-white rounded-lg">No results found</p>
        )
      }
    </div>
  )
}

export default SearchResults