import React from 'react';

import { Logo } from '@components';

export default class DrawerContent extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <Logo width={77} height={64} style={{ width: 77 }} />
        <div style={styles.right}>
          <p style={styles.title}>Material Bread</p>
          <span style={styles.version}>Alpha</span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '16px',

    backgroundColor: '#263238',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'rgba(255,255,255,1)',
    fontWeigth: 600,
    margin: 0,
    letterSpacing: 1,
  },
  version: {
    margin: 0,
    color: 'rgba(255,255,255,.7)',
    fontSize: 12,
    display: 'inline-block',
  },
};
