import React from "react";
import { BrowserRouter, Router, Routes, Route ,Navigate } from 'react-router-dom'; // Import Router and Route
import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/Login';
import { Provider } from "react-redux";
import mystore from "./redux/store";
import StudentHome from "./Screens/Student/Home";
import FacultyHome from "./Screens/Faculty/Home";
import AdminHome from "./Screens/Admin/Home";
 


function App() {
    { /* const user = localStorage.getItem("token");  */}
  return (
    <>
     <Provider store={mystore}>
  <div>
      
        
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path="student" element={<StudentHome />} />
          <Route path="faculty" element={<FacultyHome />} />
          <Route path="admin" element={<AdminHome />} />
          <Route path='/' element={<Home />} />
        </Routes>
        
      
    </div>
    </Provider>
   

    </>
  );
}

export default App
