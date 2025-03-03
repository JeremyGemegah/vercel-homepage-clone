import { Box, Button, Typography } from "@mui/material"
import graph from '../images/image.avif'
import '../App.css'

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
                <Typography sx={{fontWeight:'bold', fontSize:'32px'}}>Develop with your favorite tools &nbsp; <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28"><path d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="3.5"></path><path d="M14.75 26.25H26.25" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="3.5"></path></svg> </Typography>
                <Typography sx={{fontWeight:'bold', fontSize:'32px'}}>Launch globally, instantly &nbsp;
                <svg aria-hidden="true" fill="none" height="28"  viewBox="0 0 28 28" width="28"><circle cx="14" cy="14" r="12.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" style={{fontWeight:'normal'}}></circle><path d="M1.75 10.8756C4.90656 10.102 9.23046 9.625 14 9.625C18.7695 9.625 23.0934 10.102 26.25 10.8756M1.75 17.1244C4.90656 17.898 9.23046 18.375 14 18.375C18.7695 18.375 23.0934 17.898 26.25 17.1244" stroke="currentColor" style={{fontWeight:'normal'}} stroke-linejoin="round" stroke-width="3.5"></path><path d="M14 1.75C14.2667 1.75 14.6587 1.86617 15.1678 2.35835C15.6853 2.85867 16.2313 3.66714 16.7278 4.80194C17.7184 7.06634 18.375 10.317 18.375 14C18.375 17.683 17.7184 20.9337 16.7278 23.1981C16.2313 24.3329 15.6853 25.1413 15.1678 25.6416C14.6587 26.1338 14.2667 26.25 14 26.25C13.7333 26.25 13.3413 26.1338 12.8322 25.6416C12.3147 25.1413 11.7687 24.3329 11.2722 23.1981C10.2816 20.9337 9.625 17.683 9.625 14C9.625 10.317 10.2816 7.06634 11.2722 4.80194C11.7687 3.66714 12.3147 2.85867 12.8322 2.35835C13.3413 1.86617 13.7333 1.75 14 1.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></svg>
                    &nbsp; Keep pushing &nbsp;
                     <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28"><path d="M7 10.9375V9.1875H3.5V10.9375H7ZM3.5 10.9375V28H7V10.9375H3.5Z" fill="currentColor"></path><path d="M22.75 26.25C20.817 26.25 19.25 24.683 19.25 22.75C19.25 20.817 20.817 19.25 22.75 19.25C24.683 19.25 26.25 20.817 26.25 22.75C26.25 24.683 24.683 26.25 22.75 26.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path d="M5.25 8.75C3.317 8.75 1.75 7.183 1.75 5.25C1.75 3.317 3.317 1.75 5.25 1.75C7.183 1.75 8.75 3.317 8.75 5.25C8.75 7.183 7.183 8.75 5.25 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path d="M19.25 22.75C15.537 22.75 11.976 21.275 9.35051 18.6495C6.725 16.024 5.25 12.463 5.25 8.75" stroke="currentColor" stroke-linejoin="round" stroke-width="3.5"></path></svg>
                     </Typography>

            </Box>


            {/* section */}

            
            
            <Box>
                <Box sx={{
                    display:'grid',
                    gridTemplateColumns:'repeat(2,calc(1079px/2))',
                    height:'578px',
                    border:'1px solid #ffffff17',
                    borderTop:'none',
                    borderBottom:'none'
                    ,width:'100%'
                    ,color:'white',
                    overflow:'hidden'
                }}>
                   
                    <Box sx={{
                        boxSizing:'border-box',
                        gridColumnStart:'1'
                        ,gridColumnEnd:'span 1',
                        borderRight: '1px solid #ffffff17',
                        padding:'48px',
                        paddingTop:'32px'
                        ,overflow:'hidden',
                        '& > *':{
                            boxSizing:'border-box'
                        }
                        ,width:'100%'
                        ,position:'relative'
                        
                        
                        
                    }}>

                        <Box sx={{
                            display:'flex'
                            ,flexDirection:'column'
                            ,width:'100%'
                            ,flexGrow: 0,
                            flexShrink:1
                            ,overflow: 'hidden'
                        }}>
                            <Box sx={{display:'flex', flexDirection:'column', gap:'16px', marginBottom:'32px'}}>
                                <Box>
                                <svg height="16" style={{'shape-rendering':'unset',color:'var(--ds-gray-900)',transform:'translateZ(0)'}} width="16" aria-hidden="true"><use href="/vc-ap-vercel-marketing/_next/static/media/terminal.0a222ec1.svg#terminal"></use></svg>

                                <Typography sx={{color:'var(--ds-gray-900)'}}>Git-connected Deploys</Typography>
                                </Box>
                                <Box>
                                <Typography sx={{fontWeight:'bold', fontSize:'24px', lineHeight:'32px'}}>
                                    <strong>From localhost to https, in seconds.</strong>
                                </Typography>
                                <Typography sx={{fontWeight:'bold', fontSize:'24px', color:'var(--ds-gray-900)'}}>Deploy from Git or your CLI.</Typography>
                            </Box>
                            </Box>

                    <Box sx={{
                            border:'1px solid #ffffff17'
                            ,maxWidth:'340px'
                        ,borderRadius:'12px',
                        padding:'12px'
                            
                        }}>
                        <Box >
                            <Box sx={{
                                display:'flex',
                                gap:'6px',
                                marginBottom:'12px'
                            }}>
                                {Array.from( new Array(3)).map((_,index) => (
                                    <Box sx={{
                                        width:'8px'
                                        ,height:'8px'
                                        ,background:'#ffffff24'
                                        ,borderRadius: '50%'
                                    }}></Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ '& > *': {
                            maskImage: 'linear-gradient(to right, #454545 53.47%, transparent 100%)',
                            fontWeight:'400',
                            fontSize:'0.75rem'
                            ,lineHeight:'1.3rem',
                            wordSpacing:'.2rem'
                            ,letterSpacing:'.07rem'
                            
                        }, color:'#ededed'}}>
                            <Typography><Typography sx={{display:'inline', fontSize:'0.75rem',fontWeight:'400',lineHeight:'1.3rem', wordSpacing:'.2rem', letterSpacing:'.07rem', color:'#1f1f1f'}}><Typography sx={{ display:'inline', color:'#a1a1a1', fontSize:'0.75rem',fontWeight:'400',lineHeight:'1.3rem', wordSpacing:'.2rem', letterSpacing:'.07rem',}}>▲ ~ vercel-site/</Typography> git push</Typography></Typography>
                            <Typography >Enumerating objects: 1, done.</Typography>
                            <Typography>{"Counting objects: 100% (1/1), done."}</Typography>
                            <Typography>{"Writing objects: 100% (1/1), 72 bytes, done."}</Typography>
                            <Typography>{"Total 1 (delta 0), reused 0 (delta 0)."}</Typography>
                            <Typography>{"To github.com:vercel/vercel-site.git"}</Typography>
                            <Typography>&nbsp;&nbsp;&nbsp; 21326a9..81663c3 main -&gt; main</Typography>
                        </Box>
                    </Box>
                    
                    {/* other box */}
                    <Box sx={{
                            border:'1px solid #ffffff17'
                            ,maxWidth:'340px'
                            ,padding: '8px 12px 12px 12px'
                            ,borderRadius:'12px'
                            ,background:'#0a0a0a',
                            marginTop:'-32px',
                            zIndex: 3,
                            position:'relative'
                            ,alignSelf: 'flex-end'
                            
                          
                        }}>
                        <Box >
                            <Box sx={{
                                display:'flex',
                                gap:'6px'
                                ,marginBottom:'12px'
                                
                            }}>
                                {Array.from( new Array(3)).map((_,index) => (
                                    <Box sx={{
                                        width:'8px'
                                        ,height:'8px'
                                        ,background: index === 1?  '#e5484d': ( index === 2? '#0091ff' : '#0c9784')
                                        ,borderRadius: '50%',
                                        
                                    }} key={index}></Box>
                                ))}
                            </Box>
                        </Box>


                        <Box sx={{position:'relative'}}>
                        <Typography sx={{
                            position: 'absolute'
                            ,fontSize: '36px'
                            ,color: '#0a0a0a'
                            ,zIndex:1
                            ,textShadow:'-1px -1px 0 #454545,0 -1px 0 #454545,1px -1px 0 #454545,1px 0 0 #454545,1px 1px 0 #454545,0 1px 0 #454545,-1px 1px 0 #454545,-1px 0 0 #454545'
                            ,letterSpacing:'-.075em'
                            ,fontWeight:'600'
                            ,width:'100%'
                            ,textAlign:'center',
                            top:'14%'
                        }}>What will you ship?</Typography>
                        <svg style={{ maskImage:'linear-gradient(180deg,#454545 30%,transparent 100%)'}} class="deploy-visual_grid__roLF7" fill="none" height="144" viewBox="0 0 312 144" width="312"><rect height="181" stroke="#1a1a1a" width="311" x="0.5" y="0.5"></rect><g filter="url(#filter1_d_1086_110200)"><path clip-rule="evenodd" d="M155.5 78L200 156H111L155.5 78Z" fill="#0a0a0a" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M155.5 78L200 156H111L155.5 78Z" fill-rule="evenodd" stroke="#454545"></path></g></svg>
                        </Box>
                    </Box>

                    </Box>

                </Box>

                {/* second column */}

                <Box sx={{
                    gridColumnStart:'2'
                    ,gridColumnEnd:'span 1',
                    padding:'48px',
                    paddingTop:'32px'
                }}>
                    <Box sx={{
                        display:'flex'
                        ,flexDirection:'column'
                        ,width:'100%'
                        ,gap:'24px'
                    }}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'16px', marginBottom:'32px'}}>
                                <Box>
                                <svg height="16" style={{'shape-rendering':'unset',color:'var(--ds-gray-900)',transform:'translateZ(0)'}} width="16" aria-hidden="true"><use href="/vc-ap-vercel-marketing/_next/static/media/terminal.0a222ec1.svg#terminal"></use></svg>

                                <Typography sx={{color:'var(--ds-gray-900)'}}>Collective pre-production</Typography>
                                </Box>
                                <Box>
                                <Typography sx={{ fontSize:'24px', lineHeight:'32px', color:'var(--ds-gray-900)'}}>
                                    <strong style={{color:'white', fontWeight:'bold'}}>Every deploy is remarkable.</strong> Chat with your team on real, production-grade UI, not just designs.
                                </Typography>
                               
                            </Box>
                            </Box>


                        <Box sx={{ padding:'12px', borderRadius:'12px' , background:'#0a0a0a', alignSelf:'flex-start', border: '1px solid #ffffff17'}}>
                            <Box >
                                <Typography sx={{fontSize:'14px'}}>Swapped out the <Typography sx={{display:'inline', fontSize:'13px', padding:'2px 4px', background:'#1f1f1f', color:'var(--ds-gray-900)', borderRadius:'4px'}}>button</Typography> for</Typography>
                                <Typography sx={{fontSize:'14px'}}>some variants we needed</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ padding:'12px', borderRadius:'12px' , background:'#0a0a0a', alignSelf:'flex-end', border: '1px solid #ffffff17', position:'relative'}}>
                            <Box>
                                <Typography sx={{fontSize:'14px'}}>How about this instead?</Typography>
                            </Box>
                            <Box>
                                <Box sx={{position:'absolute', left:'0', top:'0', transform:'translateX(calc(-100% - 15px))'}}>
                                <svg fill="none" height="18" viewBox="0 0 17 18" width="17"><path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z" fill="#0091ff" stroke="var(--ds-background-100)" stroke-width="1.5"></path></svg>
                                </Box>
                                <Box sx={{paddingX:'4px', background:'#0091ff', position:'absolute', borderRadius:'6px', color:'black', left:'0', top:'16px', transform:'translateX(calc(-100% - 30px))'}}>
                                    <Typography sx={{fontSize:'11px', fontWeight:'500'}}>Pranathi</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ padding:'12px', borderRadius:'12px' , background:'#0a0a0a', alignSelf:'flex-start', border: '1px solid #ffffff17', position:'relative'}}>
                            <Box>
                                <Typography sx={{fontSize:'14px'}}>I like it. Does this work with</Typography>
                                <Typography sx={{fontSize:'14px'}}>the brand tweaks <strong>@mamuso</strong>?</Typography>
                            </Box>

                            {/* pointer */}
                            <Box >
                                <Box sx={{position:'absolute', right:'0',bottom:'20px', transform:'translateX(calc(100% + 30px))'}}>
                                <svg style={{transform:'scaleX(-1)'}} fill="none" height="18" viewBox="0 0 17 18" width="17"><path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z" fill="#e5484d" stroke="var(--ds-background-100)" stroke-width="1.5"></path></svg>
                                </Box>
                                <Box sx={{paddingX:'4px', background:'#e5484d', position:'absolute', borderRadius:'6px', color:'black', right:'0', bottom:'10px', transform:'translateX(calc(100% + 45px))'}}>
                                    <Typography sx={{fontSize:'11px', fontWeight:'500'}}>Rauno</Typography>
                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ padding:'12px', borderRadius:'12px' , background:'#0a0a0a', alignSelf:'flex-end', border: '1px solid #ffffff17', position:'relative'}}>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <Typography sx={{fontSize:'14px'}}>This looks great!</Typography>
                                <Box sx={{height:'14px', width:'1px', marginLeft:'1px', background:'#ededed', animation:' cursoranim 1.5s steps(2) infinite'}} ></Box>
                                <Box sx={{ background:'#ededed', width:'24px', height:'24px', borderRadius:'50%', marginLeft:'16px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.7071 3.39641C8.31657 3.00588 7.68341 3.00588 7.29288 3.39641L4.21966 6.46963L3.68933 6.99996L4.74999 8.06062L5.28032 7.53029L7.24999 5.56062V12.25V13H8.74999V12.25V5.56062L10.7197 7.53029L11.25 8.06062L12.3107 6.99996L11.7803 6.46963L8.7071 3.39641Z" fill="#0a0a0a" fill-rule="evenodd"></path></svg>
                                </Box>
                            </Box>
                            <Box sx={{position:'absolute', right:'0',bottom:'0px', transform:'translateX(calc(100% + 16px))'}}>
                                <svg style={{transform:'scaleX(-1)'}} fill="none" height="18" viewBox="0 0 17 18" width="17"><path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z" fill="#0c9784" stroke="var(--ds-background-100)" stroke-width="1.5"></path></svg>
                                </Box>
                        </Box>
                    </Box>

                </Box>
                </Box>
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
                        <img alt="an illustration" src={graph} style={{position:'absolute', justifySelf:'stretch', width:'100%', height:'100%'}} />
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
                    gridTemplateColumns:'repeat(2, calc(1079px/2))',
                    height: '530px',
                    border:'1px solid #ffffff17',
                    borderTop:'none',
                    boxSizing:'border-box'
                    ,'&>*':{
                        boxSizing:'border-box'
                    },
                   
                }}>
                    <Box sx={{ gridColumnStart:'1', gridColumnEnd:'span 1', borderRight:'1px solid #ffffff17', color:'white', overflow:'hidden', flexGrow:0, padding:'48px'}}>
                        <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>


                            <Box sx={{display:'flex', border:'1px solid #ffffff17', padding:'12px', borderRadius:'12px', background:'var(--ds-background-100)', alignSelf:'flex-start'}}>
                                <Box sx={{display:'flex', flexDirection:'column', gap:'8px'}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between',color:'var(--ds-gray-900)'}}> <Typography >vercel-site/<Typography sx={{display:'inline', color: 'white'}}>jvjb4ynna</Typography></Typography> <Typography>1d ago</Typography></Box>
                                    <Box sx={{display:'flex', gap:'8px', alignItems:'center'}}>
                                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" style={{color:'#a1a1a1'}} viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>

                                    <Typography sx={{display:'inline'}}>ba5f55f</Typography>
                                    <Typography>Update bento box design</Typography>
                                    </Box>
                                </Box>


                                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'24px'}}>
                                <svg aria-hidden="true" fill="none" height="32" stroke-width="2" viewBox="0 0 100 100" width="32"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="progresscircle" data-geist-progress-circle-fg="" stroke="var(--ds-teal-600)" style={{opacity:1,'--stroke-percent':90, '--percent-to-px': '2.827433388230814px', '--circumference': 282.7433388230814, '--gap-percent':6, '--offset-factor':0, '--percent-to-deg': '3.6deg', '--circle-size':'100px'}}></circle></svg>
                                <Typography sx={{ position:'absolute'}}>90</Typography>
                                </Box>
                            </Box>

                            <Box sx={{postion:'relative', display:'flex', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                                <Box sx={{position:'absolute', width:'30px', height:'30px', background:'var(--ds-background-100)', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%', transform:'translateY(-6px)', border:'1px solid var(--ds-border)'}}>
                            <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'var(--ds-gray-900)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.96452 2.5C11.0257 2.5 13.5 4.96643 13.5 8C13.5 11.0336 11.0257 13.5 7.96452 13.5C6.12055 13.5 4.48831 12.6051 3.48161 11.2273L3.03915 10.6217L1.828 11.5066L2.27046 12.1122C3.54872 13.8617 5.62368 15 7.96452 15C11.8461 15 15 11.87 15 8C15 4.13001 11.8461 1 7.96452 1C5.06835 1 2.57851 2.74164 1.5 5.23347V3.75V3H0V3.75V7.25C0 7.66421 0.335786 8 0.75 8H3.75H4.5V6.5H3.75H2.63724C3.29365 4.19393 5.42843 2.5 7.96452 2.5ZM8.75 5.25V4.5H7.25V5.25V7.8662C7.25 8.20056 7.4171 8.51279 7.6953 8.69825L9.08397 9.62404L9.70801 10.0401L10.5401 8.79199L9.91603 8.37596L8.75 7.59861V5.25Z" fill="currentColor"></path></svg>
                            </Box>
                            <svg data-size="large" fill="none" height="152" viewBox="0 0 117 152" width="117"><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint0_linear_1364_100888)" stroke-width="2"></path><path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint1_linear_1364_100888)" stroke-width="2"></path><g clip-path="url(#clip0_1364_100888)"><path clip-rule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fill-rule="evenodd"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1364_100888" x1="116" x2="4" y1="72" y2="72"><stop stop-color="#E5484D"></stop><stop offset="0.5" stop-color="#FFC634"></stop><stop offset="1" stop-color="#45DEC4"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1364_100888" x1="116" x2="116" y1="152" y2="1.56712e-05"><stop stop-color="var(--ds-background-200)"></stop><stop offset="0.322368" stop-color="var(--ds-background-200)" stop-opacity="0"></stop></linearGradient><clipPath id="clip0_1364_100888"><rect fill="white" height="8" width="8"></rect></clipPath></defs></svg>
                                </Box>       
                            
                            
                            
                            <Box sx={{display:'flex', border:'1px dashed #ffffff17', padding:'12px', borderRadius:'12px', background:'var(--ds-background-100)', alignSelf:'flex-end'}}>
                                <Box sx={{display:'flex', flexDirection:'column', gap:'8px'}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between',color:'var(--ds-gray-900)'}}> <Typography >vercel-site/<Typography sx={{display:'inline', color: 'white'}}>gigj178pv</Typography></Typography> <Typography>10min ago</Typography></Box>
                                    <Box sx={{display:'flex', gap:'8px', alignItems:'center'}}>
                                    <svg data-testid="geist-icon" height="16" stroke-linejoin="round" style={{color:'#a1a1a1'}} viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" fill="currentColor"></path></svg>

                                    <Typography sx={{display:'inline'}}>bx012mm</Typography>
                                    <Typography>Fix ESLint error on query</Typography>
                                    </Box>
                                </Box>


                                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'24px'}}>
                                <svg aria-hidden="true" fill="none" height="32" stroke-width="2" viewBox="0 0 100 100" width="32"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="progresscircleback" stroke="var(--ds-gray-alpha-400)" style={{opacity: 1,'--stroke-percent': 33, '--percent-to-px': '2.827433388230814px', '--circumference': 282.7433388230814, '--gap-percent':6, '--offset-factor':0, '--percent-to-deg': '3.6deg', '--circle-size':'100px'}}></circle>
                                    <circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="progresscircle" data-geist-progress-circle-fg="" stroke="var(--ds-red-700)" style={{opacity:1,'--stroke-percent':55, '--percent-to-px': '2.827433388230814px', '--circumference': 282.7433388230814, '--gap-percent':6, '--offset-factor':0, '--percent-to-deg': '3.6deg', '--circle-size':'100px'}}></circle></svg>
                                <Typography sx={{ position:'absolute'}}>55</Typography>
                                </Box>
                            </Box>



                        </Box>
                    </Box>

                    <Box sx={{ gridColumnStart:'2', gridColumnEnd:'span 1', width:'100%', padding:'48px'}}>
                        <Box>
                            <Box sx={{
                                border: '1px solid var(--ds-border)'
                                ,height:'268px'
                                ,borderRadius:'12px'
                                ,position:'relative'
                                ,background: 'var(--ds-background-100)'
                                ,display:'flex'
                                ,width:'100%'
                                ,color:'white'
                                ,boxSizing:'border-box',
                                '&>*':{
                                    boxSizing:'border-box'
                                }
                                ,'::before':{
                                    content:'""'
                                    ,position:'absolute'
                                    ,height:'calc(100% + 2px)'
                                    ,width:'calc(100% + 2px)'
                                    ,left: '-1px'
                                    ,bottom:'-3px'
                                    ,zIndex:1
                                    ,background:'linear-gradient(to bottom,transparent,black 100%)'
                                }
                            }}>

                                <Box sx={{width:'50%', borderRight: ' 1px solid var(--ds-border)',padding:'16px', '&>*':{zIndex:'1'}, display:'flex', flexDirection:'column', gap:'16px'}}>
                                    <Box>
                                        <Typography>Conformance</Typography>
                                    </Box>
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>Excellent</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <svg aria-hidden="true" fill="none" height="20" stroke-width="2" viewBox="0 0 100 100" width="20"><circle cx="50" cy="50" r="42.5" stroke-width="15" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="progresscircle" data-geist-progress-circle-fg="" stroke="var(--ds-teal-600)" style={{opacity:1,'--stroke-percent':90, '--percent-to-px':'2.670353755551324px', '--offset-factor':0,'--circumference':267.0353755551324, '--circle-size':'100px', '--percent-to-deg':'3.6deg', '--gap-percent':9}}></circle></svg>
                                            <Typography sx={{fontSize:'16px', fontWeight:'600'}}>9.5</Typography>

                                            </Box>
                                        </Box>
                                    </Box>


                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>Total Issues</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <Typography sx={{fontSize:'16px', fontWeight:'600'}}>34</Typography>

                                            </Box>
                                        </Box>
                                    </Box>
                                    
                                    
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>Major Issues</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <Typography sx={{fontSize:'16px', fontWeight:'600'}}>12</Typography>

                                            </Box>
                                        </Box>
                                    </Box>
                                    
                                </Box>


                                <Box sx={{width:'50%', borderLeft:'1px solid var(--ds-border)', padding:'16px', '&>*':{zIndex:'1'}, display:'flex', flexDirection:'column', gap:'16px'}}>
                                <Box>
                                        <Typography>Code Owners</Typography>
                                    </Box>
                                  

                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>@vercel/design</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=rauno&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=gennydee&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>
                                                
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=gln&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                            </Box>
                                            </Box>
                                        </Box>
                                    </Box>


                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>@vercel/eng</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=timer&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=jared&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>
                                                
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=cramforce&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>


                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=gkaragkiaouris&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>


                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=tomocchino&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                            </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    
                                    
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px', background:'var(--ds-gray-alpha-100)', borderRadius:'12px'}}>
                                            <Typography sx={{fontSize:'12px', color:'var(--ds-gray-900)'}}>@vercel/marketing</Typography>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'8px', height:'32px'}}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=greetah&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=m0rgane&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>
                                                
                                                <Box sx={{height:'22px', width:'22px', borderRadius:'100%', overflow:'hidden', marginLeft:'-10px', border:'1px solid black'}}>
                                                    <img alt="an illustration"src={'https://vercel.com/api/www/avatar?u=lindsaygilson&s=44'} style={{width:'100%', height:'100%'}} />
                                                </Box>

                                            </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    
                                        
                                    
                                </Box>

                            </Box>
                        </Box>
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