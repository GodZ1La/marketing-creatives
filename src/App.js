import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contenido from './components/Contenido/Contenido';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#833177',
    },
    secondary: {
      main: '#833177',
    },
  },
});

function App() {
  
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
        <Header />
        <Contenido/>
        <Footer/>
        </div>
      </ThemeProvider>
  );
}

export default App;
