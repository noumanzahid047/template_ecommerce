import React from 'react'
import { DensityMedium } from '@mui/icons-material'
import { AppBar, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const Search = styled("div")(({theme})=> ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Options = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: "space-between",
    gap: "20px",
    width: "50%",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));
const TempAll = styled(Box)(( { theme }) =>({
    display: "flex"
}))
const Navbar = () => {
  return (
    <AppBar position= "sticky"  sx={{
        backgroundColor: '#FF948E'
    }}>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs: "none", sm: "block"}}}>My Templates</Typography>
            <Options>
                <Typography>All Templates</Typography>
                <TempAll>
                    <Typography>Template Categories</Typography>
                    <KeyboardArrowDownIcon/> 
                </TempAll>
                <Search><InputBase placeholder='Search..'/></Search>
            </Options>
            <DensityMedium sx={{display:{xs: "block", sm: "none"}}}/>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar