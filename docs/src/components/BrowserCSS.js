import React from 'react';
import {} from '../../../src/';
import IphoneX from './Iphonex';
import Pixel3xl from './Pixel3xl';

const BrowserCSS = ({ children, preview }) => {
  if (preview == 'web') {
    return (
      <div className="browser">
        <div className="browser_bar">
          <div className="browser_bar_btns">
            <div className="browser_bar_btn browser_bar_btn--close" />
            <div className="browser_bar_btn browser_bar_btn--mini" />
            <div className="browser_bar_btn browser_bar_btn--resize" />
          </div>
        </div>
        <div className="browser_body">{children}</div>
      </div>
    );
  } else if (preview == 'ios') {
    return <IphoneX>{children}</IphoneX>;
  } else if (preview == 'android') {
    return <Pixel3xl>{children}</Pixel3xl>;
  } else if (preview == 'desktop') {
    return (
      <div className="browser">
        <div className="browser_bar">
          <div className="browser_bar_btns">
            <div className="browser_bar_btn browser_bar_btn--close" />
            <div className="browser_bar_btn browser_bar_btn--mini" />
            <div className="browser_bar_btn browser_bar_btn--resize" />
          </div>
        </div>
        <div className="browser_body">{children}</div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default BrowserCSS;
