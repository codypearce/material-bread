import React from 'react';
import {} from '../../../src/';
import IphoneX from './Iphonex';
import Pixel3xl from './Pixel3xl';

const BrowserCSS = ({ children, preview }) => {
  if (preview == 'web') {
    return (
      <div style={{ height: 550 }}>
        <div className="browser" style={{ height: 475, margin: 0 }}>
          <div className="browser_bar">
            <div className="browser_bar_btns">
              <div className="browser_bar_btn browser_bar_btn--close" />
              <div className="browser_bar_btn browser_bar_btn--mini" />
              <div className="browser_bar_btn browser_bar_btn--resize" />
            </div>
            <div className="browser__bar__search" />

            <i className="fa fa-plus browser__bar__plus" />

            {/* <div className="browser_bar_tabs">
              <div className="browser_bar_tab" />
              <div className="browser_bar_tab active">
                <span>Bread</span>
              </div>
              <div className="browser_bar_tab" />
            </div> */}
          </div>
          <div className="browser_body">{children}</div>
        </div>
      </div>
    );
  } else if (preview == 'ios') {
    return (
      <IphoneX>
        <div>{children}</div>
      </IphoneX>
    );
  } else if (preview == 'android') {
    return <Pixel3xl>{children}</Pixel3xl>;
  } else if (preview == 'desktop') {
    return (
      <div style={{ height: 550 }}>
        <div className="browser" style={{ height: 475, margin: 0 }}>
          <div className="browser_bar browser__desktop__bar">
            <div className="browser_bar_btns">
              <div className="browser_bar_btn browser_bar_btn--close" />
              <div className="browser_bar_btn browser_bar_btn--mini" />
              <div className="browser_bar_btn browser_bar_btn--resize" />
            </div>
            <span className="browser__desktop__title">Desktop App</span>
          </div>
          <div className="browser_body">{children}</div>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default BrowserCSS;
