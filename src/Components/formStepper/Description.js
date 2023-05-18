import { StyleForm, CssTextField } from "./StyleForm";
import { Button } from "@mui/material";
function Description() {
  return (
    <StyleForm>
      {
        <>
        <CssTextField label="موضوع" id="custom-css-outlined-input" />
          <CssTextField
            placeholder="توضیحات"
            multiline
            rows={3}
            maxRows={4}
          />
          <Button variant="contained" color="success">
 ارسال
</Button>
        </>
      }
    </StyleForm>
  );
}

export default Description;
