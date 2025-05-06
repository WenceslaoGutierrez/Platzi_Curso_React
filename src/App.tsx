import './App.css'
import CounterTypeScript from './components/CounterTypeScript/CounterTypeScript';

function greet(name: string): string{
  return `Hi there, ${name}`
}

function App() {
  console.log(greet("Wences"));

  return (
    <>
      <CounterTypeScript/>
    </>
  );
}

export default App
