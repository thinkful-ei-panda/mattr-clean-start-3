// import React from 'react';
// import Box from './composition/Box';
// import './App.css';
// import Tooltip from './composition/Tooltip'

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )


// function App() {
//   return (
//     <main className='App'>
//       <Box className='left' flexBasis={1}>
//         This is the {firstTooltip} on the left <Tooltip message='one more tooltip message'>
//           box.
//         </Tooltip>
//       </Box>

//       <Box className='right'>
//         This is the content {secondTooltip} from the RIGHT box.
//       </Box>
//     </main>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;