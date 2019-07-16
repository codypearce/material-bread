import React from 'react';
import Logo from './Logo';
import PropTypes from 'prop-types';

function LogoWithText({ subtitle, style, height, width }) {
  return (
    <div style={styles.container}>
      <Logo animated height={height} width={width} style={{ ...style }} />
      <div style={{ alignSelf: 'center', marginLeft: 20 }}>
        <h1 style={styles.title} className={'Logo__title'}>
          Material Bread
        </h1>
        {subtitle ? (
          <h4 style={styles.subtitle}>One Component Library, Six Platforms</h4>
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  container: {
    // maxWidth: 387,
    marginBottom: 20,
    alignItems: 'center',
    // display: 'flex',
  },
  title: {
    fontSize: 48,
    marginTop: 10,
    marginBottom: 0,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    // color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: 400,
    margin: 0,
    marginTop: 6,
    marginBottom: 0,
    color: 'white',
  },
};

LogoWithText.propTypes = {
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  style: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default LogoWithText;
