import { StyleForm, CssTextField } from "./StyleForm";

import * as React from "react";

function PersonalInfo() {
  return (
    <StyleForm>
      {
        <>
          <CssTextField label="نام" id="custom-css-outlined-input" />
          <CssTextField label="نام خانوادگی" id="custom-css-outlined-input" />
          <CssTextField label="ایمیل" id="custom-css-outlined-input" />
        </>
      }
    </StyleForm>
  );
}

export { PersonalInfo };
