import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import AllCourse from "./components/AllCourse";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import UpdateCourse from "./components/UpdateCourse";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourse />} />
                <Route path="/update-course/:id" element={<UpdateCourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
