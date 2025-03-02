import { Box, Container, Typography } from "@mui/material"
import logo from '../images/wordmark.svg'




function Header(){

    return(
        <Container sx={{padding: '0 24px', width: '100%',bgcolor:'black', color:'white', display:'flex', flexDirection:'row', justifyContent:'space-between',  margin:0, height:'64px', alignItems:'center'}} style={{maxWidth:'unset'}}>
            {/* navigation links  section*/}
                <Box sx={{display:'flex', flexDirection:'row', gap:'32px'}}>
                    <Box sx={{height:'100%', margin:'auto'}}>
                <img alt="vercel-logotype Logo" width="90.6923076923077" height="18" style={{color:'transparent'}} src={logo} />
                </Box>
                
                <Box>
                    {/* highlighter */}
                    <Box></Box>

                   {/*  links */}
                   <Box sx={{flexDirection:'row', display:'flex'}}>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Products</Typography>
                    </Box>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Solutions</Typography>
                    </Box>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Resources</Typography>
                    </Box>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Enterprise</Typography>
                    </Box>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Docs</Typography>
                    </Box>
                    <Box sx={{p:'8px 12px'}}>
                        <Typography>Pricing</Typography>
                    </Box>
                    
                   </Box>
                </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', gap:'12px', '& > *': { gap:'12px'}}}>
                    <Box sx={{display:'flex', '& > *': {
                        border: '1px solid #ffffff24'
                    }}}>
                        <Box sx={{paddingX:'6px', height:'32px', bgcolor:'#0a0a0a', textAlign:'center', display:'flex', alignItems:'center', borderRadius:'6px'}}>
                        <Typography >Log In</Typography>
                        </Box>
                        <Box sx={{paddingX:'6px', height:'32px', bgcolor:'#0a0a0a', textAlign:'center', display:'flex', alignItems:'center', borderRadius:'6px'}}>
                        <Typography>Contact</Typography>
                        </Box>
                    </Box>
                    <Box sx={{paddingX:'6px', height:'32px', bgcolor:'#ededed', textAlign:'center', display:'flex', alignItems:'center', borderRadius:'6px', color:'#0a0a0a'}}>
                        <Typography>Sign Up</Typography>
                    </Box>
                </Box>
        </Container>
    )
}

export default Header
