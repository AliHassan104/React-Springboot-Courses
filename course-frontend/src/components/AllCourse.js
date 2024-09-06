import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import baseUrl from "../api/springboot-api";
import { toast } from "react-toastify";

const AllCourse = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${baseUrl}/course`).then(
      (response) => {
        console.log(response.data);
        toast.success("Course has been loaded", {
          position: "bottom-center",
        });
        SetCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  // const updateCourses = (id)=> {
  //   SetCourses(courses.filter((c) => c.id != id))
  // }

  const [courses, SetCourses] = useState([]);

  return (
    <div className="text-center my-3">
      <h1>All Course</h1>
      <p>List of courses are as follow</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={getAllCoursesFromServer}/>)
        : "No Courses"}
    </div>
  );
};

export default AllCourse;
