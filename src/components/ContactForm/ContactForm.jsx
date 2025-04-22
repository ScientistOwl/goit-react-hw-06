import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .matches(/^[\d+\-]+$/, "Number must contain only digits, '+' or '-'"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
