import React, { useState } from "react";

import "./input-form.css";
import TextField from "@mui/material/TextField";

const InputForm = ({ placeholder, type, clasa, sendDataToParent }) => {
  const [errored, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let maxLength = (e) => {
    if (e.target.value.length >= 40) {
      setError(true);
      setErrorMessage("The maximum length must be 40 characters");
    } else {
      setError(false);
      setErrorMessage("");
    }
  };

  return (
    <div className="input-div">
      <TextField
        className={clasa}
        onChange={(e) => {
          maxLength(e);
          sendDataToParent(errored);
        }}
        label={placeholder}
        type={type}
        variant="outlined"
        helperText={errorMessage}
        error={errored}
        required
      />
    </div>
  );
};

export default InputForm;
