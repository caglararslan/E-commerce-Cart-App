import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
        <ProductList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
