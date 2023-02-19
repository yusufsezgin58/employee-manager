import './App.css';
import Main from './Components/Main/Main'
import { useContext } from 'react';
import ThemeContext from './Context/Context';
import Adding from './Components/Adding/Adding'

function App() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={theme == "light" ? "light" : "dark"}>
      <Main />
    </div>
  );
}

export default App;
