import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <ListGroupItem tag={Link} to="/" action>
        Home
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/add-course" action>
        Add Course
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/view-courses" action>
        View Courses
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/about" action>
        About Us
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/contact-us" action>
        Contact Us
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menus;
