import React from 'react'

const SearchInput = ({ searchValue, setSearchValue, handleSearchValue  }) => {
  return <div className='searchDiv'>
    <input className='searchInput' type='text' value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyUp={handleSearchValue} />
    <code className='keyboardShortcut'>Ctrl + /</code>
  </div>
}

export default SearchInput