import { Box, Button, Typography } from "@mui/material"
import GridCube from "./gridCube"

function GridGuide(){
    return(
        <Box sx={{display:'grid' ,gridTemplate: 'repeat(8,calc(718.666px /8) )/ repeat(12, calc(1079px/12))', position:'absolute', width:'100%', zIndex:100}}> 
           
            
           {Array.from( new Array(12)).map((_,index) => (
               <GridCube x={index+1} y={'1'} firstrow={true}/>
           )
           ) }

           {/* content area */}

           <GridCube x={'1'} y={'2'}/>
           <GridCube x={'1'} y={'3'}/>
           <GridCube x={'1'} y={'4'}/>
           <GridCube x={'1'} y={'5'}/>
          
          
          
           <GridCube x={'12'} y={'2'}/>
           <GridCube x={'12'} y={'3'}/>
           <GridCube x={'12'} y={'4'}/>
           <GridCube x={'12'} y={'5'}/>

           <Box sx={{
            position:'absolute',
            gridColumnStart: 2,
            gridRowStart: 2,
            gridColumnEnd:'span 10',
            gridRowEnd:'span 4',
            border: '1px solid #ffffff17',
            zIndex:'100',
            inset: 0
            }}>

                <Box>
                    <Typography variant="h1" sx={{fontSize:'47.7px', color: 'rgb(237, 237, 237)'}}>Your complete platform for the web.</Typography>
                    <Typography>Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</Typography>
                    <Box> <button></button>
                    <button></button>
                    </Box>
                </Box>

           </Box>
          
           
           {Array.from( new Array(12)).map((_,index) => (
               <GridCube x={index+1} y={'6'} />
           )
           ) }


           {Array.from( new Array(12)).map((_,index) => (
               <GridCube x={index+1} y={'7'} />
           )
           ) }


           {Array.from( new Array(12)).map((_,index) => (
               <GridCube x={index+1} y={'8'} />
           )
           ) }

            
        </Box>
    )
}
export default GridGuide