import { StyleForm, CssTextField } from "./StyleForm";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import MaleInfo from "./MaleInfo";
import { Button } from "@mui/material";
function PersonalInfo2() {
  const [value, setValue] = React.useState("");
  const [showLog, setShowLog] = React.useState(null);

  const handleRadioChange = (event) => {
    let valueRadio = event.target.value;
    setValue(valueRadio);

    if (valueRadio == "male") {
      setShowLog(<MaleInfo />);
    } else {
      setShowLog("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyleForm>
      {
        <>
          <CssTextField label="کد ملی" id="custom-css-outlined-input" />
          <CssTextField label="شماره تماس" id="custom-css-outlined-input" />

          <form onSubmit={handleSubmit}>
            <FormControl variant="standard">
              <FormLabel id="demo-error-radios">جنسیت</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
                sx={{ display: "flex", flexFlow: "row" }}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="مرد"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="زن"
                />
              </RadioGroup>
              {showLog}
            </FormControl>
          </form>
        </>
      }
    </StyleForm>
  );
}

export { PersonalInfo2};
