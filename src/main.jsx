import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Home from './Home.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <>

    <App/>
    {/* <Booststrap/> */}
  </>,
)
