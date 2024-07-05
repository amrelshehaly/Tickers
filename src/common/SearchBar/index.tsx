import React, { forwardRef } from 'react'
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

const SearchBar =  forwardRef(({ onChange, onSubmit }: SearchProps, ref: React.Ref<HTMLInputElement>) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      onSubmit()
    }
  }

  return (
    <div>
      <div className='SearchWrapper'>
          <input ref={ref} data-testid='inputSearch' placeholder='Search for a stock' type='search' onChange={onChange} onKeyPress={handleKeyPress} />
      </div>
      <div style={{ paddingLeft: '3%', color: 'white' }}>Press Enter to Search</div>
    </div>
  )
})

export default SearchBar