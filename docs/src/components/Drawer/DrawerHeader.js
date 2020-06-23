import React from 'react';

import { Logo } from '@components';
import { BodyText } from '../../../../src';

export default class DrawerContent extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <Logo width={77} height={64} style={{ width: 77 }} />
        <BodyText style={styles.title}>Material Bread</BodyText>
        <BodyText style={styles.version}>v0.2.9</BodyText>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '12px 6px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },

  title: {
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
    margin: 0,
    marginTop: 20,
    letterSpacing: 1,
  },
  version: {
    margin: 0,
    color: 'rgba(255,255,255,.7)',
    fontSize: 12,
    marginTop: 8,
  },
};
