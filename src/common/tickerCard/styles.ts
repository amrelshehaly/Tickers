import { Card, styled } from '@mui/material'

export const CardWarpper = styled(Card)(({ theme }) =>({
    // minWidth: "10em",
    // minheight: "10em",
    // maxWidth: '14em',
    width: '14em',
    [theme.breakpoints.down('sm')]:{
        width: '10em'
    },
    borderRadius: "10px",
    backgroundColor: "#232639",
    '& .MuiCardContent-root':{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: "#d5d5d9"
    }   
}))