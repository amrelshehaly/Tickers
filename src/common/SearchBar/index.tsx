import React from 'react'
import './styles.scss'

type SearchProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const SearchBar = ({ onChange }: SearchProps) => {
  return (
    <div className='SearchWrapper'>
        <input placeholder='Search for a stock' type='search' onChange={onChange} />
    </div>
  )
}

export default SearchBar