import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticConponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'


function App() {

  return (
    <>
      <StaticConponent></StaticConponent>
      <UserList></UserList>
    </>
  );
}

export default App
