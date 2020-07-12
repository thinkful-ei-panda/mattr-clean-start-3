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

// import React, { Component } from 'react';
// import './App.css';
// import Messages from './Messages'
// import TheDate from './state/TheDate'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>YOUR APPLICATION NAME!</h1>
//         <Messages name="Messages" unread={0}/>
//         <Messages name="Notifications" unread={10}/>
//         <TheDate />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import Box from './composition/Box';
import './App.css'
import picture from './goc.png'
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'

const reactTooltip = (
  <Tooltip message='I am finally starting to get it' color='#126BCC'>
   react
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='none of these buttons work yet'>
    App 4
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Box className='left'>
        <h2> Menu </h2>
        <ul className='menu-list'>
          <li> App 1 </li>
          <li> App 2 </li>
          <li> App 3 </li>
          <li> {secondTooltip} </li>
          
        </ul>
      </Box>
      <section className='right' flexbasis={2}>
      
      <Box className='right' flexbasis={2}>
      <h1> <img src={picture} alt="matt dizzle react arcade" className='title-img' /> </h1>
      <hr/>
        This is going to be my {reactTooltip} playground where I create fun little apps
        to demonstrate various concepts of react. This my next step in becoming
        a full stack developer. Please browse around and see what I have built.
        <TheDate />
      </Box>

     
    </section>
    </main>
  )
}


export default App;