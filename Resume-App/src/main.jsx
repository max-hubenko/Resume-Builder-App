import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Education from './components/Education'
import General from './components/General'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
      <General />
      <Education />
    </div>
  </React.StrictMode>,
)
