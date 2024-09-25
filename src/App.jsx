import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Use useState for dynamic content
  const [mobnum, setMobnum] = useState(8825925024);
  const [gpa, setGpa] = useState([8.9, 9.2, 9.2, 9.3]);
  const [creditsCompleted, setCreditsCompleted] = useState(true);

  // Calculate CGPA
  const calculateCGPA = () => {
    return (gpa.reduce((ov, nv) => ov + nv) / gpa.length).toFixed(2);
  };

  return (
    <>
      <h1>Hello Harsha</h1>
      <p>Contact Number: {mobnum}</p>
      <p>CGPA: {calculateCGPA()}</p>
      <p>Credits Completed: {creditsCompleted.toString()}</p>

      <nav>
        <ul>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </>
  );
}

export default App;
