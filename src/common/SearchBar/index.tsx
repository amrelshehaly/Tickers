import React from 'react'
import './styles.scss'

type SearchProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onSubmit: () => void
}

/**
 * 
 * @param onChange callback function that is triggered if any changes occured in the input textfield 
 * @param onSubmit callback function that is triggered if the user press on the Enter button 
 * @returns a searchbar component for user to search for the ticker.
 */

const SearchBar = ({ onChange, onSubmit }: SearchProps) => {
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      onSubmit()
    }
  }

  return (
    <div className='SearchWrapper'>
        <input placeholder='Search for a stock' type='search' onChange={onChange} onKeyPress={handleKeyPress} />
    </div>
  )
}

export default SearchBar