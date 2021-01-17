import React, { useEffect, useState } from 'react';
import './App.css'

//components
import Main from './view/Pages/Main/Main';

//control
import { listenToTests } from './control/firebase/get';



function App() {
  const [tests, setTests] = useState([])

  useEffect(() => {
    listenToTests({setTests})
  }, [])

  return (

    <div >
      <h1>Hi</h1>
      {
        tests.map(test => {
          return (<p key={test.id}>{test.title}</p>)
        })
      }
      <Main />
    </div>
  )
}




export default App;
