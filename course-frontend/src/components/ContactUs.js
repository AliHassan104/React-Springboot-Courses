import React, { useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  });

  return (
    <Container className="mt-4">
      <h1 className="text-center">Contact Us</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Enter your message"
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
