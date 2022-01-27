import React from "react";

import "./input-form.css";
import TextField from "@mui/material/TextField";

const InputForm = ({ label, placeholder, type, clasa }) => {
  let test = (e) => {
    if (e.target.value.length > 40) {
    }
  };

  return (
    <div className="input-div">
      <TextField
        className={clasa}
        onChange={test}
        label={placeholder}
        type={type}
        variant="outlined"
        helperText="The maximum lenght must be 40 characters"
        error={true}
        required
      />
    </div>
  );
};

export default InputForm;
