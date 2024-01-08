import './services.css'
import javaScript from './../../../public/javascript-svgrepo-com (1).svg'
import firebase from './../../../public/firebase-svgrepo-com.svg'
import reactJS from './../../../public/react-svgrepo-com.svg'
import mongoDB from './../../../public/mongodb-svgrepo-com.svg'
const Services = () => {
  return (
    <div style={{width:'90%', height:'full', margin:"40px auto"}}>
      <h1 className='skill'>SKILLS</h1>
      <div className='iconsContent'>
        <img src={javaScript} alt="" />
        <img src={reactJS} alt="" />
        <img src={firebase} alt="" />
        <img src={mongoDB} alt="" />
      </div>
      <div className='eduCon'>
        <div className='education'>
        <h1 className='skill'>education</h1>
        <p>I am from Jashore, currently enrolled in an Islamic university, specializing in Quranic studies. Passionate about deepening my understanding of the Quran and dedicated to continuous learning.</p>
        </div>
        <div className='education'>
        <h1 className='skill'>experience</h1>
        <p>Experienced Full Stack Developer adept in React, Express, and MongoDB. Skilled in UI/UX, server-side logic, and data design. Notable projects: real-time chat app, task management system. Collaborative problem solver, committed to continuous learning. Eager to contribute to innovative web projects</p>
        </div>
      </div>
    </div>
  );
};

export default Services;