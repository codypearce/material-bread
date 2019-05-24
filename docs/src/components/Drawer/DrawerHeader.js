import React from 'react';

import { Logo } from '@components';
import { BodyText } from '../../../../src';

export default class DrawerContent extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <Logo width={77} height={64} style={{ width: 77 }} />
        <div style={styles.right}>
          <BodyText style={styles.title}>Material Bread</BodyText>
          <BodyText style={styles.version}>v0.1.1</BodyText>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '12px 6px',
    paddingRight: 10,
    backgroundColor: '#263238',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  right: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'rgba(255,255,255,1)',
    fontWeight: '300',
    margin: 0,
    letterSpacing: 1,
  },
  version: {
    margin: 0,
    color: 'rgba(255,255,255,.7)',
    fontSize: 12,
    marginTop: 6,
  },
};
