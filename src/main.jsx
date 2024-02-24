import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Education from './components/Education';
import General from './components/General';
import Experience from './components/Experience';
import Preview from './components/Preview';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    const [educationArray, seteducationArray] = useState([
        {
            university: "Example University",
            degree: "Computer Science",
            degreelevel: "Bachelors",
            gradyear: "2024"
        },
    ]);

    const [workArray, setworkArray] = useState([
        {
            job: "Web Developer",
            company: "Example Company",
            startdate: "01-04-2018",
            enddate: "12-23-2024",
            jobdesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic quia, quasi aperiam aliquid, laboriosam ad et odit pariatur eligendi distinctio temporibus atque? Error, nisi. Esse nostrum perspiciatis nobis modi.", 
        }


    ]);

    const [generalData, setFormData] = useState({
        general: {
          fullname: "Firstname Lastname",
          email: "example@gmail.com",
          phone: "999-999-9999",
          address: "City, State"
        }
    });


    const handleEducationSubmit = (action, data) => {
        if (action == "add") {
            const updatededucationArray = [...educationArray, data];
            seteducationArray(updatededucationArray);
        } else if (action == "remove") {
            const updatededucationArray = [...educationArray]
            updatededucationArray.pop();
            seteducationArray(updatededucationArray);
        }
    }

    const handleWorkSubmit = (action, data) => {
        if (action == "add") {
            const updatedWorkArray = [...workArray, data];
            setworkArray(updatedWorkArray);
        } else if (action == "remove") {
            const updatedWorkArray = [...workArray]
            updatedWorkArray.pop();
            setworkArray(updatedWorkArray);
        }
    }

    const handleGeneralSubmit = (section, data) => {
        setFormData(prev => ({ 
            ...prev, 
            [section]: section === 'general' ? data : [...prev[section], data]
        }));
  
    };


    return (
        <div className='main-container'>
            <div className='left-container'>
                <General onDataSubmit={data => handleGeneralSubmit('general', data)} />
                <Education onDataSubmit={(action,data) => handleEducationSubmit(action, data)} />
                <Experience onDataSubmit={(action, data) => handleWorkSubmit(action, data)} />
            </div>
            <div className='right-container'>
                <Preview generalData= {generalData.general} educationArray={educationArray} workArray={workArray} />
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
