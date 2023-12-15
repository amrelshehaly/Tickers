import React from 'react'
import { TextField } from '@mui/material'
import { SearchWrapper } from './styles'

type SearchProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const SearchBar = ({ onChange }: SearchProps) => {
  return (
    <SearchWrapper>
        <TextField id="search" type="search" placeholder='Search for a stock' onChange={onChange} InputLabelProps={{ shrink: true }} />
    </SearchWrapper>
  )
}

export default SearchBar