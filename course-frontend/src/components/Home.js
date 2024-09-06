import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Container className="text-center my-2 py-2">
      <h1 className="display-4">Learn With Ali Hassan</h1>
      <p className="lead">
        This platform is developed by Learn with Ali Hassan to help you master
        new skills and enhance your knowledge.
      </p>
      <Button color="primary" outline size="lg">
        Start Using
      </Button>
    </Container>
  );
}

export default Home;
