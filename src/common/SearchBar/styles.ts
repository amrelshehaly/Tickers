import { styled, Box } from '@mui/material'

export const SearchWrapper = styled(Box)(() => ({
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5em',
    '& .MuiTextField-root': {
        width: '100%'
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: "5em",
        borderColor: 'white',
        backgroundColor: "#232639",
        color: 'white',

        '& input' :{
            width: "100%"
        }
    }
}))