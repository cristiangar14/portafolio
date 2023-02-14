/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
 Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

import './contactForm.scss';

const contactSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  message: Yup.string()
    .required('El mensaje es requerido'),
});

const ContactForm = ({ loading, sendEmail }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    sendEmail(values); // hacer algo con los valores
    setSubmitting(false); // deshabilitar el botón de envío
    resetForm(); // reiniciar el formulario
  };

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="name">
                {({ field }) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...field}
                    label="Nombre"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    className="form--input"
                  />
                )}
              </Field>
              <div className="form-error">
                <ErrorMessage name="name" className="form-error" />
              </div>
            </div>
            <div>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...field}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    className="form--input"
                  />
                )}
              </Field>
              <div className="form-error">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div>
              <Field name="message">
                {({ field }) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...field}
                    label="Mensaje"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={5}
                    fullWidth
                    className="form--input"
                  />
                )}
              </Field>
              <div className="form-error">
                <ErrorMessage name="message" />
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              Enviar
            </Button>
            {loading ? <p>LOADING...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;