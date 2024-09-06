import React, { useEffect } from "react";
import { Container } from "reactstrap";

const About = () => {
  useEffect(() => {
    document.title = "About Us";
  });

  return (
    <Container className="mt-4">
      <h1 className="text-center">About Us</h1>
      <p>
        Welcome to our application! We are committed to providing the best
        service for managing courses efficiently. Our platform offers
        easy-to-use features that help you add, view, and manage your courses
        with ease. Whether you are a student or an educator, our tools are
        designed to enhance your learning experience.
      </p>
      <p>
        Thank you for choosing our application. We hope to continue to serve
        your needs and help you achieve your goals.
      </p>
    </Container>
  );
};

export default About;
