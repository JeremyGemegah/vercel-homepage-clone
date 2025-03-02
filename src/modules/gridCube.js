import { Box } from "@mui/material"

function GridCube({x,y,firstrow}){

    return(
        <Box sx={{
            position:'absolute',
            gridColumnStart: x,
            gridRowStart: y,
            gridColumnEnd:'span 1',
            gridRowEnd:'span 1',
            border: '1px solid #ffffff17',
            zIndex:'100',
            inset: 0,
         
            '::before': firstrow? {
                content:'""',
               
                display:'block',
                width:'100%',
                position:'absolute',
                left:0,
                right:0,
                height:'20%',
                bottom:0,
                borderTop: '1px solid #ffffff17'

            } : ''

        }}>

        </Box>
    )

}

export default GridCube