import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Link from '../components/Link/Link';
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
  return (
    <div className="container">
      <Head>
        <title>The Evolve Experience | Donate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <div className={clsx(['section', styles.sectionBlack])}>
          <div className={clsx(['section-content', styles.img])}></div>
        </div>
        <section className={styles.sectionGem}>
          <div className={clsx(['section-content', styles.contentNarrow, styles.keepInTouch])}>
            <h1 className={styles.h1}>KEEP IN TOUCH</h1>
            <h3 className={styles.h3}>We'd love to hear from you.</h3>
            <div className={styles['social-links']}>
              <IconLink variant="email" theme="background-gem-of-the-ocean" text="info@reddoorproject.org" />
              <IconLink variant="phone" theme="background-gem-of-the-ocean" text="+1 (503) 451-0739" />
              <IconLink variant="facebook" theme="background-gem-of-the-ocean" />
              <IconLink variant="twitter" theme="background-gem-of-the-ocean" />
              <IconLink variant="instagram" theme="background-gem-of-the-ocean" />
            </div>
          </div>
        </section>
        <section className={styles.sectionContribution}>
          <div className={clsx(['section-content', styles.contribution])}>
            <div className={styles.sectionListItem}>
              <div className={styles.sectionDescription}>
                <h2 className={styles.h2}>THE RED DOOR PROJECT NEWSLETTER</h2>
                <p>
                  We send occasional newsletters with information about what's going on at the Red Door, and
                  notifications to let you know when we have upcoming productions!
                </p>
              </div>
              <div className={styles.sectionImage}></div>
            </div>
          </div>
        </section>
        <section className={styles.sectionContribution}>
          <div className="section-content">
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
                {({ submitForm, isSubmitting }) => (
                  <Form className={styles.form} name="contact" method="POST" data-netlify="true">
                    <h2 className={styles.h2}>SUBSCRIBE</h2>
                    <Field
                      component={TextField}
                      name="email"
                      type="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      required
                    />
                    <br />
                    <Field
                      component={TextField}
                      name="firstname"
                      type="text"
                      label="First Name"
                      variant="outlined"
                      className={styles.firstName}
                      required
                    />
                    <Field
                      component={TextField}
                      name="lastname"
                      type="text"
                      label="Last Name"
                      variant="outlined"
                      className={styles.lastName}
                      required
                    />
                    <br />
                    <Field
                      component={TextField}
                      name="message"
                      type="text"
                      fullWidth
                      label="Where did you hear about the Red Door Project?"
                      variant="outlined"
                    />
                    {isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      disableRipple
                      disabled={isSubmitting}
                      onClick={submitForm}
                      type="submit"
                    >
                      Subscribe
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KeepInTouch;
