import React from 'react';
import Logo from '@components/Icons/Logo';
function LogoWithText() {
  return (
    <div style={{ maxWidth: 387, marginBottom: 20 }}>
      <Logo />
      <h1
        style={{
          fontSize: 48,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 0,
        }}>
        Material Bread
      </h1>
    </div>
  );
}

export default LogoWithText;
