import './App.css'
import Button from './components/Button/Button';

function App() {
  const handleClick = () => alert("CLICK!");

  return (
    <>
      <Button onClick={handleClick} label="Click me"/>
    </>
  );
}

export default App
