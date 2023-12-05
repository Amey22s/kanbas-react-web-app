import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
// import db from "./Database";
import { useState, useEffect } from "react";
import store from './store';
import { Provider } from 'react-redux';
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import Signin from "../users/signin";
import Signup from "../users/signup";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api" ;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name:"New Course",
    number:"New Number",
    startDate:"2023-10-31",
    endDate:"2023-12-15"
  });


  const addNewCourse = async () => {
    
    const response = await axios.post(URL, {...course, _id: new Date().getTime().toString()});
    setCourses([response.data, ...courses]);
    setCourse({ name: "", number: "" });
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async (courseId) => {
    const response = await axios.put(`${URL}/${courseId}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <div className="wd-kanbas-navigation">
        <KanbasNavigation />
      </div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Courses/" element={<Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />} />
        </Routes>
    </div>
    </Provider>
  );
}
export default Kanbas;