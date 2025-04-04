import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import About from './Component/About'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App=()=>{
    
 const[progress,setProgress] = useState(0)
  
  
    return (
      <div>
         <Router>

         <LoadingBar
         height={2}
        color='#f11946'
        progress={progress}
        />

        <Navbar/>

        
        
        <Routes>
          <Route exact path="/" element={< News setProgress ={setProgress}  key="General" pageSize={5} country="in" category="General"/>}></Route>
          <Route exact path="/Business" element={< News setProgress ={setProgress}  key="Busines"  pageSize={5} country="in" category="Business"/>}></Route>
          <Route exact path="/Entertainment" element={< News setProgress ={setProgress}  key="Entertainment"  pageSize={5} country="in" category="Entertainment"/>}></Route>
          <Route exact path="/Health" element={< News setProgress ={setProgress}  key="Health"  pageSize={5} country="in" category="Health"/>}></Route>
          <Route exact path="/Science" element={< News setProgress ={setProgress}  key="Science"  pageSize={5} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={< News setProgress ={setProgress}  key="Sports"  pageSize={5} country="in" category="Sports"/>}></Route>
          <Route exact path="/Technology" element={< News setProgress ={setProgress}  key="Technology"  pageSize={5} country="in" category="Technology"/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          </Routes>
        
        </Router>
      
      </div>
    )
  
}
export default App
