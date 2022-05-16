import React from 'react';
// import logo from './logo.svg';
import Box from '@mui/material/Box';
import './App.css';
import Canvas from './ui/canvas';
import Settings from './ui/settings';
import VerticalTabs from './ui/tab';

function App() {
  React.useEffect(()=>{
    fetch('https://mildlycrazydiamond.github.io/image-cdn/manifest.json')
    .then(response => response.json())
    .then(data => console.log(data));
  },[])

  return (
    <div className="App">
      <body>
      <div style={{ width: '100%' }}>
      <Box
        sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
      >
        <VerticalTabs />
        <Canvas />
        <Settings />
        </Box>
        </div>
      </body>
    </div>
  );
}

export default App;
