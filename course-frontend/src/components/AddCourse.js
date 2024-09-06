import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Toast } from "reactstrap";
import axios from "axios";
import baseUrl from "../api/springboot-api";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Courses";
  });

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  // post data

  const postDataToServer = (data) => {
    axios.post(`${baseUrl}/course`, data).then(
      (response) => {
        console.log(response.data);
        toast.success("course added successfully");
      },
      (error) => {
        console.log(error);
        toast.error("something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter id here"
            name="userId"
            id="userId"
            value={course.id}
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            name="title"
            id="title"
            value={course.title}
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            name="description"
            id="description"
            value={course.description}
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button
            type="button" // or type reset
            onClick={() => setCourse({ id: "", title: "", description: "" })}
            color="warning ml-3"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
