import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "WorkDwarfs - интернет-решения"
  }, [])
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Сайт в разработке</h1>
        <p>Мы работаем над улучшением нашего сайта. Скоро мы вернемся!</p>
      </header>
    </div>
  );
}

export default App;
