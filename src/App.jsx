import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'


function App() {

  return (
    <>
      <UserListWithLoading></UserListWithLoading>
    </>
  );
}

export default App
