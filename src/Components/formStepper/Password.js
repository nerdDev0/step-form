import { StyleForm, CssTextField } from "./StyleForm";

function Password() {
 
  return (
    <StyleForm>
      {
        <>
          <CssTextField label="رمزعبور" id="custom-css-outlined-input" />
          <CssTextField label="تکرار رمزعبور" id="custom-css-outlined-input" />

        </>
      }
    </StyleForm>
  );
}

export default Password;
