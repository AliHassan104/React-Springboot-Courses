import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  //   CardTitle,
  CardSubtitle,
  CardText,
  //   CardFooter,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../api/springboot-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Course = ({ course, update }) => {
  const navigate = useNavigate();

  const deleteCourse = (id) => {
    axios.delete(`${baseUrl}/course/${id}`).then(
      (response) => {
        toast.success("course deleted");
        update();
      },
      (error) => {
        toast.error("failed to delete");
      }
    );
  };

  const handleUpdate = () => {
    navigate(`/update-course/${course.id}`);
  };

  return (
    <Card>
      <CardBody>
        <CardSubtitle>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
          <Button color="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
