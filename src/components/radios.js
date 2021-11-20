import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../css/radios.css";
export function ControlOne() {
  const Active = (e) => {
    let SetTime = document.querySelector(".set-time");

    SetTime.textContent = "set time ." + e.target.value;
  };
  const [value, setValue] = React.useState("Within 50 Mins");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        onClick={Active}
      >
        <FormControlLabel
          value="Within 50 Mins"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="Within 50 Mins"
        />
        <FormControlLabel
          value="Schedule Order"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="Schedule Order"
        />
      </RadioGroup>
    </FormControl>
  );
}

export function ControlTwo() {
  const Active = (e) => {
    let SetTime = document.querySelector(".set-time");

    SetTime.textContent = "set time ." + e.target.value;
  };
  const [value, setValue] = React.useState("09:00 PM - 10:00 PM");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="09:00 PM - 10:00 PM"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="09:00 PM - 10:00 PM"
          onClick={Active}
        />
        <FormControlLabel
          value="10:00 PM - 11:00 PM"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="10:00 PM - 11:00 PM"
          onClick={Active}
        />
        <FormControlLabel
          value="11:00 PM - 11:59 PM"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="11:00 PM - 11:59 PM"
          onClick={Active}
        />
      </RadioGroup>
    </FormControl>
  );
}

export function ControlOneRtl() {
  const Active = (e) => {
    let SetTime = document.querySelector(".set-time");

    SetTime.textContent = "ضبط الوقت ." + e.target.value;
  };
  const [value, setValue] = React.useState("خلال 50 دقيقة");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        onClick={Active}
      >
        <FormControlLabel
          value="خلال 50 دقيقة"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="خلال 50 دقيقة"
        />
        <FormControlLabel
          value="جدول المواعيد"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="جدول المواعيد"
        />
      </RadioGroup>
    </FormControl>
  );
}

export function ControlTwoRtl() {
  const Active = (e) => {
    let SetTime = document.querySelector(".set-time");

    SetTime.textContent = "ضبط الوقت ." + e.target.value;
  };
  const [value, setValue] = React.useState("9.00 مساءً : 100.00 مساءً");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="9.00 مساءً : 100.00 مساءً"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="9.00 مساءً : 10.00 مساءً"
          onClick={Active}
        />
        <FormControlLabel
          value="10.00 مساءً : 11.00 مساءً"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="10.00 مساءً : 11.00 مساءً"
          onClick={Active}
        />
        <FormControlLabel
          value="11.00 مساءً : 11.59 مساءً"
          control={
            <Radio
              sx={{
                color: "orange",
                "&.Mui-checked": {
                  color: "orange",
                },
              }}
            />
          }
          label="11.00 مساءً : 11.59 مساءً"
          onClick={Active}
        />
      </RadioGroup>
    </FormControl>
  );
}
