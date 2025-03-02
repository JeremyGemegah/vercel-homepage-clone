import { Box, Button, Typography } from "@mui/material"
import graph from '../images/image.avif'

function Content(){
    return(
        <Box sx={{width:'1079px'}}>
           {/*  section */}
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', paddingY:'5em', color:'white', flexDirection:'column',border: '1px solid #ffffff17', position:'relative','::before':{
                content: '""',
                display:'block',
                position:'absolute',
                left:0,
                right:0,
                bottom:0,
                borderTop:'1px solid #ffffff17',
                height:'16px'
            }}}>
                <Typography>Develop with your favorite tools <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28"><path d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="3.5"></path><path d="M14.75 26.25H26.25" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="3.5"></path></svg> </Typography>
                <Typography>Launch globally, instantly 
                <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28"><circle cx="14" cy="14" r="12.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></circle><path d="M1.75 10.8756C4.90656 10.102 9.23046 9.625 14 9.625C18.7695 9.625 23.0934 10.102 26.25 10.8756M1.75 17.1244C4.90656 17.898 9.23046 18.375 14 18.375C18.7695 18.375 23.0934 17.898 26.25 17.1244" stroke="currentColor" stroke-linejoin="round" stroke-width="3.5"></path><path d="M14 1.75C14.2667 1.75 14.6587 1.86617 15.1678 2.35835C15.6853 2.85867 16.2313 3.66714 16.7278 4.80194C17.7184 7.06634 18.375 10.317 18.375 14C18.375 17.683 17.7184 20.9337 16.7278 23.1981C16.2313 24.3329 15.6853 25.1413 15.1678 25.6416C14.6587 26.1338 14.2667 26.25 14 26.25C13.7333 26.25 13.3413 26.1338 12.8322 25.6416C12.3147 25.1413 11.7687 24.3329 11.2722 23.1981C10.2816 20.9337 9.625 17.683 9.625 14C9.625 10.317 10.2816 7.06634 11.2722 4.80194C11.7687 3.66714 12.3147 2.85867 12.8322 2.35835C13.3413 1.86617 13.7333 1.75 14 1.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></svg>
                     Keep pushing 
                     <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28"><path d="M7 10.9375V9.1875H3.5V10.9375H7ZM3.5 10.9375V28H7V10.9375H3.5Z" fill="currentColor"></path><path d="M22.75 26.25C20.817 26.25 19.25 24.683 19.25 22.75C19.25 20.817 20.817 19.25 22.75 19.25C24.683 19.25 26.25 20.817 26.25 22.75C26.25 24.683 24.683 26.25 22.75 26.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path d="M5.25 8.75C3.317 8.75 1.75 7.183 1.75 5.25C1.75 3.317 3.317 1.75 5.25 1.75C7.183 1.75 8.75 3.317 8.75 5.25C8.75 7.183 7.183 8.75 5.25 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path d="M19.25 22.75C15.537 22.75 11.976 21.275 9.35051 18.6495C6.725 16.024 5.25 12.463 5.25 8.75" stroke="currentColor" stroke-linejoin="round" stroke-width="3.5"></path></svg>
                     </Typography>

            </Box>


            {/* section */}

            <Box sx={{color:'white', 
                border: '1px solid #ffffff17',
                height:'340px',
                padding:'48px',
                background: '#0a0a0a'
            }}>
                <Box sx={{
                    display:'grid',
                    gridTemplateColumns:'repeat(4,calc(1079px/4))',
                    height:'100%',
                    position:'relative'
                }}>
                    <Box sx={{
                        
                        left:0,
                        right:0,
                        
                        position:'absolute',
                        height:'100%'
                    }}>
                        <img  src={graph} style={{position:'absolute', justifySelf:'stretch', width:'100%', height:'100%'}} />
                    </Box>

                    <Box>
                        <Typography>Privacy-friendly, lightweight Analytics</Typography>
                        <Typography>Upgrade your post-launch workflow with actionable, real-time insights</Typography>
                    </Box>

                </Box>
            </Box>

            {/* section */}
            <Box>
                <Box sx={{
                    display:'grid',
                    gridTemplateColumns:'repeat(2, calc(1079/2))',
                    height: '530px',
                    border:'1px solid #ffffff17',
                    borderTop:'none'
                }}>
                    <Box sx={{ gridColumnStart:'1', gridColumnEnd:'span 1', borderRight:'1px solid #ffffff17', display:'flex', flexDirection:'column', alignItems:'center', color:'white'}}>
                        <Box sx={{width:'442.5px'}}>
                            <Box>
                                <Box>
                                    <Box> <Typography>vercel-site/<Typography sx={{display:'inline'}}>jvjb4ynna</Typography></Typography> <Typography>1d ago</Typography></Box>
                                    <Box>
                                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" style={{color:'#a1a1a1'}} viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>

                                    <Typography sx={{display:'inline'}}>ba5f55f</Typography>
                                    <Typography>Update bento box design</Typography>
                                    </Box>
                                </Box>


                                <Box>
                                <svg aria-hidden="true" fill="none" height="32" stroke-width="2" viewBox="0 0 100 100" width="32"><circle  cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="gauge_arcSecondary__s11_g" stroke="#ffffff24"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="gauge_arc__UGu7u" data-geist-progress-circle-fg="" stroke="#0c9784" ></circle></svg>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ gridColumnStart:'2', gridColumnEnd:'span 1'}}>

                    </Box>

                </Box>
            </Box>



            {/* section */}
            <Box sx={{color:'white'}}>
                <Box sx={{height:'136px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center',border: '1px solid #ffffff17', borderTop:'none'}}>
                    <Typography>Scale your <Button>Enterprise</Button> without compromising <Button>security</Button></Typography>
                </Box>
                <Box sx={{width:'100%', height:'16px',border: '1px solid #ffffff17', borderTop:'none'}}>

                </Box>
            </Box>

           {/*  section */}

           <Box>
            <Box sx={{
                width:'100%',
                height:'232px',
                display:'grid',
                gridTemplateColumns: 'repeat(3, calc(1079px/3))',
                position:'relative',
                border: '1px solid #ffffff17',
                borderTop: 'none',
                color:'white'
            }}>
                <Box sx={{ gridColumnStart:'2', gridColumnEnd:'span 1', borderRight:'1px dashed #ffffff17', borderLeft:'1px dashed #ffffff17', position:'absolute', display:'block', width:'100%', height:'100%'}}>

                </Box>

                <Box sx={{gridColumnStart:'1', gridColumnEnd:'span 2', display:'flex', justifyContent:'center', flexDirection:'column', padding:'48px'}}>
                    <Typography><Typography sx={{display:'inline'}}>Ready to deploy?</Typography> Start building with a free account.</Typography>
                    <Typography>Speak to an expert for <Typography sx={{display:'inline'}}>Pro</Typography> or <Typography sx={{display:'inline'}}>Enterprise</Typography> needs.</Typography>
                    <Box>
                        <Button>Start Deploying</Button>
                        <Button>Talk to an Expert</Button>
                    </Box>
                </Box>

                <Box sx={{gridColumnStart:'3', gridColumnEnd:'span 1', display:'flex', justifyContent:'center', flexDirection:'column', padding:'48px'}}>
                    <Typography><Typography sx={{display:'inline'}}>Explore Vercel Enterprise</Typography> with an interactive product tour, trial, or a personalized demo.</Typography>
                    <Button>Explore Enterprise</Button>
                </Box>

            </Box>
           </Box>
        </Box>
    )
}

export default Content