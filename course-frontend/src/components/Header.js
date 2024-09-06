import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardBody>
          <h1 className="text-center my-2">Welcome to the application</h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
