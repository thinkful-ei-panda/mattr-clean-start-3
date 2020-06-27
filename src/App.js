import React from 'react';
import Box from './composition/Box';
import Card from './composition/Card'
import './App.css';
import STORE from './composition/STORE'
// import List from './composition/List'



function App() {
  return (
    <main className='App'>
      <Box className='left' flexBasis={1}>
        <h2>{STORE.lists[0].header}</h2>
      <Card>
      <h3></h3>
      <p>The description of the card</p>
      <button className='delete'>Delete</button>
      </Card>
      </Box>
      <Box className='right' name='Untitled Card'>
        This is the content children from the RIGHT box.
      
      </Box>
      
    
    </main>
  );
}

export default App;