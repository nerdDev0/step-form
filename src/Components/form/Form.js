import React from "react";
import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { Button } from "@mui/material";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [page, setPage] = useState(0);
  const FormTitle = ["SignUp", "Personal Info", "Other"];
  const pageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else if (page === 2) {
      return <OtherInfo />;
    }
  };
  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="form-container">
        <div className="header">
          <h2>{FormTitle[page]}</h2>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer"></div>

        <Button
          disabled={page === 0}
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
          variant="contained"
        >
          Prev
        </Button>

        <Button
          disabled={page === FormTitle.length - 1}
          onClick={() => {
            setPage((currentPage) => currentPage + 1);
          }}
          variant="contained"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
