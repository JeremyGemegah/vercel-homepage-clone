import { Box, Container } from '@mui/material';
import Header from './modules/header';
import Footer from './modules/footer';
import Hero from './modules/hero';
import Content from './modules/content';

function App() {
  return (
    <Box sx={{overflow:'hidden', width:'100%', bgcolor:'black'}}>
    <Header/>
    <Box sx={{marginX:'5em'}}>
    <Hero/>
    <Content/>
    </Box>
    <Footer/>
    </Box>
  );
}

export default App;
