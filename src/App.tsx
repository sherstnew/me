import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeContext } from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'dark');

  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
