import logo from './logo.svg';
import './App.css';
import { Profiler } from 'react';

function Profile(){
  return(
    <div>
    profile
    
    </div>
  
  )
}

function Skills(){
  return(
    <div>Skills</div>
  )
}

function Contact(){
  return(
    <div>Contact</div>
  )
}

function Image(){
  return(
    <div>Image</div>
  )
}

function App() {
  return (
    <div>
   <Profile />
   <Skills /> 
   <Contact />
   <Image />

    </div>
  );
}

export default App;
