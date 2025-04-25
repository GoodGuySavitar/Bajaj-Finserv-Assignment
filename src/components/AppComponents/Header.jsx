import { useState } from 'react'
import DoctorSearch from '../HomePageComponents/DoctorSearch'
import SearchResults from '../HomePageComponents/SearchResults'

const Header = ({ doctors }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const onSearchResults = (results) => {
    setSearchResults(results);
    setIsSearchResultsOpen(true);
  }

  return (
    <nav className="bg-primary w-full h-16 flex items-center justify-center px-10 py-4"> 
        <DoctorSearch doctors={doctors} onSearchResults={onSearchResults} />
        {isSearchResultsOpen && <SearchResults data={searchResults} onClose={() => setIsSearchResultsOpen(false)} />}
    </nav>
  )
}

export default Header