import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Education from './components/Education';
import General from './components/General';
import Experience from './components/Experience';
import Preview from './components/Preview';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    const [formData, setFormData] = useState({
        general: {
          fullname: "Firstname Lastname",
          email: "example@gmail.com",
          phone: "999-999-9999",
          address: "City, State"
        },
        education: {
          university: "University of Wisconsin-Madison",
          degree: "Computer Science",
          degreelevel: "Bachelors of Arts",
          gradyear: "2025",
        },
        experience: {
          job: "Janitor",
          company: "Walmart",
          startdate: "12-04-2022",
          enddate: "12-05-2022" ,
          jobdesc: "Mopped up shit",
        }
    });

    const handleDataSubmit = (section, data) => {
        setFormData(prev => ({ ...prev, [section]: data }));
  
    };

    useEffect(() => {
      console.log(formData);
    }, [formData]);


    return (
        <div className='main-container'>
            <div className='left-container'>
                <General onDataSubmit={data => handleDataSubmit('general', data)} />
                <Education onDataSubmit={data => handleDataSubmit('education', data)} />
                <Experience onDataSubmit={data => handleDataSubmit('experience', data)} />
            </div>
            <div className='right-container'>
                <Preview data={formData} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
