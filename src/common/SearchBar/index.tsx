import React from 'react'
import './styles.scss'

type SearchProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onSubmit: () => void
}

const SearchBar = ({ onChange, onSubmit }: SearchProps) => {
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event)
    if(event.key === 'Enter'){
      console.log('enter press here! ')
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