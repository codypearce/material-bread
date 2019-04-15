import React from 'react';
import Logo from './Logo';
import PropTypes from 'prop-types';

function LogoWithText({ subtitle, style }) {
  return (
    <div style={styles.container}>
      <Logo animated style={{ ...style }} />
      <h1 style={styles.title} className={'Logo__title'}>
        Material Bread
      </h1>
      {subtitle ? (
        <h4 style={styles.subtitle}>One Component Library, Six Platforms</h4>
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 387,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: 400,
    margin: 0,
    marginTop: 6,
    textAlign: 'center',
  },
};

LogoWithText.propTypes = {
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  style: PropTypes.object,
};

export default LogoWithText;
