import React, { useRef } from 'react';
import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import IconLink from '../components/Link/IconLink';
import clsx from 'clsx';
import styles from '../styles/KeepInTouch.module.scss';
import Footer from '../components/Footer/Footer';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  firstname: Yup.string().required('First Name is required'),
  lastname: Yup.string().required('Last Name is required'),
});

const KeepInTouch = () => {
  const emailInput = React.useRef();
  const firstNameInput = React.createRef();
  const lastNameInput = React.createRef();
  return (
    <div className="container">
      <Head>
        <title>Keep in Touch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Send us an email, give us a call, follow us on social media, or sign up for our newsletter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <main className="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', styles.img, 'hero'])}></div>
        </div>
        <section className={styles.sectionGem}>
          <div className={clsx(['section-content', styles.contentNarrow, styles.keepInTouch])}>
            <h1 className={styles.h1}>Keep in Touch</h1>
            <p className={clsx([styles.h3, 't3'])}>We'd love to hear from you.</p>
            <div className={styles['social-links']}>
              <div className={styles.firstRow}>
                <IconLink variant="email" theme="background-gem-of-the-ocean" text="info@reddoorproject.org" />
                <IconLink variant="phone" theme="background-gem-of-the-ocean" text="+1 (503) 451-0739" />
              </div>
              <div className={styles.secondRow}>
                <IconLink variant="facebook" theme="background-gem-of-the-ocean" />
                <IconLink variant="twitter" theme="background-gem-of-the-ocean" />
                <IconLink variant="instagram" theme="background-gem-of-the-ocean" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={clsx('section-content', styles.newsletterSection)}>
            <h2 className={styles.h2}>The Red Door Project Newsletter</h2>
            <p className="t3">
              We send occasional newsletters with information about what's going on at the Red Door, and notifications
              to let you know when we have upcoming productions!
            </p>
          </div>
        </section>
        <section>
          <div className={clsx('section-content', styles.formSection)}>
            <div>
              <Formik
                initialValues={{
                  email: '',
                  firstname: '',
                  lastname: '',
                  message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({ 'form-name': 'contact', ...values }),
                  })
                    .then(() => {
                      alert('Success');
                      resetForm();
                    })
                    .catch(() => {
                      alert('Error');
                    })
                    .finally(() => setSubmitting(false));
                }}
              >
                {(props) => {
                  return (
                    <Form className={styles.form} name="contact" method="POST" data-netlify="true" noValidate>
                      <h2 className={styles.h2}>SUBSCRIBE</h2>
                      <Field
                        id="email-field"
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email required"
                        fullWidth
                        variant="outlined"
                        inputRef={emailInput}
                        inputProps={{
                          'aria-label': props.errors.email ? props.errors.email : 'Please add your email (required).',
                        }}
                        required
                      />
                      <br />
                      <Field
                        component={TextField}
                        id="firstname-field"
                        name="firstname"
                        type="text"
                        label="First Name required"
                        variant="outlined"
                        className={styles.firstName}
                        inputRef={firstNameInput}
                        inputProps={{
                          'aria-label': props.errors.firstname
                            ? props.errors.firstname
                            : 'Please add your first name (required).',
                        }}
                        required
                      />
                      <Field
                        id="lastname-field"
                        component={TextField}
                        name="lastname"
                        type="text"
                        label="Last Name required"
                        variant="outlined"
                        className={styles.lastName}
                        inputRef={lastNameInput}
                        inputProps={{
                          'aria-label': props.errors.lastname
                            ? props.errors.lastname
                            : 'Please add your last name (required).',
                        }}
                        required
                      />
                      <br />
                      <Field
                        component={TextField}
                        name="message"
                        type="text"
                        fullWidth
                        label="Where did you hear about the Red Door Project? (optional)"
                        inputProps={{ 'aria-label': 'Where did you hear about the Red Door Project? (optional).' }}
                        variant="outlined"
                      />
                      {props.isSubmitting && <LinearProgress />}
                      <br />
                      <Button
                        variant="contained"
                        style={{ textTransform: 'uppercase' }}
                        color="primary"
                        disableRipple
                        disabled={props.isSubmitting}
                        type="submit"
                        onClick={() => {
                          props.submitForm();
                          setTimeout(() => {
                            if (props.errors.email || !props.touched.email) {
                              emailInput.current.focus();
                              return;
                            }
                            if (props.errors.firstname || !props.touched.firstname) {
                              firstNameInput.current.focus();
                              return;
                            }
                            if (props.errors.lastname || !props.touched.lastname) {
                              lastNameInput.current.focus();
                              return;
                            }
                          }, 5);
                        }}
                      >
                        Subscribe
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className={styles.keepInTouchImage}></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KeepInTouch;
