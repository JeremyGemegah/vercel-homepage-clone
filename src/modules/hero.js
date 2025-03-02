import GridGuide from "./gridGuide";
import Polygon from "./polygon";
import { Box } from "@mui/material";


function Hero(){
return(
    <>
    <Box sx={{ display:'grid',
        width:'1079px',
        height:'718.666px',
        position:'relative',
        overflow:'hidden',
        gridTemplate: 'repeat(8,calc(718.666px /8) )/ repeat(12, calc(1079px/12))'
    }}>
    
    {/* colorful background */}
    <Box sx={{width:'100%', height:'100%', position:'absolute','::after':{
        contain:'""',
        display:'block',
        background:'red',
        position:'absolute',
        
        inset:0,
        left:0,
        right:0,
        top:0,
        
    }}}>
        <Box sx={{
        
        display:'block',
        background:'radial-gradient(150% 150% at 50% 140%, transparent 0, transparent 50%, black 76%)',
        position:'absolute',
    
        inset:0,
        zIndex:100
        
    }}>

        </Box>
    <Box sx={{ width:'100%',
        height:'100%',
        background: 
                'conic-gradient(from 180deg at 50% 70%,rgba(0,0,0,0) 0deg,#0059abcc 72.0000010728836deg,#0fffa9cc 144.0000021457672deg,#ffce20cc 216.00000858306885deg,#c50000cc 288.0000042915344deg,rgba(0,0,0,0) 1turn)',
        position:'absolute',
        gridRow:'1/-1',
        gridColumn:'1/-1',
        transform: 'translateY(calc(calc(718.666px/8)/1.2))',
        
        
    }}>
        </Box>

    </Box>
    <Box sx={{zIndex:102, position: 'relative', gridColumnStart:'1', gridColumnEnd:'span 12',gridRowStart:'1', gridRowEnd:'span 8', display:'flex'}}>
    <Polygon/>
    </Box>
    

    {/* grid Guides */}

    <GridGuide/>
    
    </Box>
    </>
)
}

export default Hero;