import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ title, src }) => {
  return <iframe title={title} src={`${src}?cc_load_policy=1&cc_lang_pref=en`}></iframe>;
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Video;
