import React from "react";
import Button from "./Button";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import TableTop from "./TableTop";
const LinkedinPage = () => {
  return (
    <div>
      <h1>Hii</h1>
      <TableTop/>
      <Button name="Close Window" onClick={() => window.close()}></Button> 
    </div>
  );
};

export default LinkedinPage;
