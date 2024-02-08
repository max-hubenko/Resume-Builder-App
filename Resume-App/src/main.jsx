import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Education from './components/Education'
import General from './components/General'
import Experience from './components/Experience'
import Preview from './components/Preview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
      <div className='left-container'>
        <General />
        <Education />
        <Experience />
      </div>
      <div className='right-container'>
         <Preview />
      </div>
    </div>
  </React.StrictMode>,
)
