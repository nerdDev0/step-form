import { StyleForm, CssTextField } from "./StyleForm";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import Radio from "@mui/material/Radio";
function MaleInfo() {
  const [value, setValue] = React.useState("");
  const [showLog, setShowLog] = React.useState(null);

  const handleRadioChange = (event) => {
    let valueRadio = event.target.value;
    setValue(valueRadio);
    if (valueRadio == "Exemption") {
      setShowLog("کد معافیت");
    } else if (valueRadio == "Studying") {
      setShowLog("کد اشتغال به تحصیل");
    } else if (valueRadio == "end") {
      setShowLog("کد پایان خدمت");
    } else if (valueRadio == "solder") {
      setShowLog("کد سربازی");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StyleForm>
      {
        <>
          <div onSubmit={handleSubmit}>
            <FormControl variant="standard">
              <FormLabel id="demo-error-radios">وضعیت سربازی</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
                sx={{ display: "flex", flexFlow: "row", flexWrap: "wrap" }}
              >
                <FormControlLabel
                  value="solder"
                  control={<Radio />}
                  label="سرباز"
                />

                <FormControlLabel
                  value="Exemption"
                  control={<Radio />}
                  label="معافیت"
                />
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="اتمام سربازی"
                />

                <FormControlLabel
                  value="Studying"
                  control={<Radio />}
                  label="اشتغال به تحصیل"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <CssTextField label={showLog} id="custom-css-outlined-input" />
        </>
      }
    </StyleForm>
  );
}

export default MaleInfo;
