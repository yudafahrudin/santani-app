"use client";

import React from "react";
import {
  Grid,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  Container,
  FormControl,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

//Data
const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  city: "",
  country: "",
  email: "",
  password: "",
};

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
];
//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

const UserForm = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Stack direction="row">
        <div style={{ padding: 20, paddingLeft: 0, paddingRight: 0 }}>
          <Button variant="text" href="/">
            <ArrowBackIcon />
          </Button>
        </div>
        <h2>ISI BUKU TAMU</h2>
      </Stack>
      <Grid justify="center" spacing={2} gap={2}>
        <Grid item md={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <Grid item container spacing={1} justify="center" gap={2}>
                    <Grid item xs={12}>
                      <Field
                        label="Nama"
                        variant="outlined"
                        fullWidth
                        name="firstName"
                        value={values.firstName}
                        component={TextField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">
                          Keperluan Bagian
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          label="Occupation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.occupation}
                          name="occupation"
                        >
                          <MenuItem>None</MenuItem>
                          {options.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Button
                    style={{ marginTop: 20 }}
                    disabled={!dirty || !isValid}
                    variant="contained"
                    color="primary"
                    type="Submit"
                  >
                    SIMPAN BUKU TAMU
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserForm;
