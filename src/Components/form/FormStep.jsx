import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material";
import { Field, Form, Formik,FormikConfig,FormikValues } from "formik";
//import { TextField } from "formik-material";
import { mixed, number, object } from "yup";
export default function FormStep() {
  return (
    <Card>
      <CardContent>
        <Formik
          validationSchema={object({
            money: mixed().when("millionaire", {
              is: true,
              then: number().required().min(1_000_000, "false"),
              otherwise: number().required(),
            }),
          })}
          initialValues={{
            firstName: "",
            lastName: "",
            millionaire: "",
            money: 0,
            description: "",
          }}
        
        >

          <Form autoCapitalize="off">
            <div>
              <Field
                name="firstName"
                component={TextField}
                label="First Name"
              />
              <Field name="lastName" component={TextField} label="Last Name" />
              <label>
                <Field
                  name="millionaire"
                  type="checkbox"
                  component={Checkbox}
                  label="FirstName"
                />
                i am millionaire
              </label>
            </div>

            <div>
              <Field
                name="money"
                component={TextField}
                type="number"
                label="Mony"
              />
            </div>
            <div>
              <Field
                name="description"
                component={TextField}
                label="Description"
              />
            </div>
            <button type="submit"  onSubmit={() => {}}>click</button>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}


