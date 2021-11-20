import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../css/code.css";

export function Instruction() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="field-responsive d-block m-auto"
    >
      <TextField
        id="outlined-basic"
        label="Add Instructions"
        variant="outlined"
        className="w-100  bg-white"
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
export function Code() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="field-responsive d-block m-auto"
    >
      <TextField
        id="outlined-basic"
        label="Add Promo Code"
        variant="outlined"
        className="w-100 bg-white pe-3"
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
