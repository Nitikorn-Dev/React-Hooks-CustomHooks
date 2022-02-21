import './App.css';
import useScreen from './custom-hook/useScreen';
import { ThemeProvider } from './useReduce/ThemeContext';
import FComponent from './useReduce/FComponent';

function App() {
  const screen = useScreen();
  return (
    <div className="App">
      <h1>
        ScreenSize :{screen}
      </h1>
      <ThemeProvider>
        <FComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
