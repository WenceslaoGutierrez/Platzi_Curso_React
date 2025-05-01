import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const items = ["React","Django","Java","JavaScript","Vite"];

  return (
    <section>
      <h1>¡Hola mundo!</h1>
      <Card title="Card 1" description="Card description"></Card>
      <Card title="Card 2" description="Card description"></Card>
      <ul>
        {
          items.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
