import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({

  palette: {
    primary: {
      main: "#64CCC5",
      light: "#DAFFFB",
      dark: "#001C30"
    },
    secondary:{
      main: "#29ADB2"
    },
  },
  typography:{
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.75rem"
    },
    h3: {
      fontSize: "1.75rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5:{
      fontSize: "1.25rem"
    },
    h6:{
      fontSize: "1rem"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
