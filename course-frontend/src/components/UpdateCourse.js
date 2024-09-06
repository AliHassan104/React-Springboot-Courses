import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import baseUrl from "../api/springboot-api";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCourse = () => {
  const { id } = useParams(); // Get course ID from the route
  const navigate = useNavigate();

  const [course, setCourse] = useState({ id: "", title: "", description: "" });

  useEffect(() => {
    document.title = "Update Course";

    // Fetch existing course data
    axios.get(`${baseUrl}/course/${id}`).then(
      (response) => {
        setCourse(response.data);
      },
      (error) => {
        console.error(error);
        toast.error("Failed to load course data");
      }
    );
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();
    axios.put(`${baseUrl}/course/${id}`, course).then(
      (response) => {
        toast.success("Course updated successfully!");
        navigate("/view-courses"); // Redirect to course list
      },
      (error) => {
        toast.error("Failed to update course");
      }
    );
  };

  return (
    <Container>
      <h1 className="text-center my-3">Update Course</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            name="title"
            id="title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            name="description"
            id="description"
            value={course.description}
            style={{ height: 200 }}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Update Course
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default UpdateCourse;
