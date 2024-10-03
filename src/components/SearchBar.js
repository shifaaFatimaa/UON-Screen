import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '30%',
  border: `2px solid ${alpha(theme.palette.common.black, 0.5)}`, 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1, 1, 1, 0),
  paddingRight: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  paddingLeft: theme.spacing(2),
  width: '100%',
  '&::placeholder': {
    color: 'black',
  },
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));

// Functional component for the search bar
export default function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange} 
        />
        <SearchIcon
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'black',
          }}
        />
      </Search>
    </Box>
  );
}
