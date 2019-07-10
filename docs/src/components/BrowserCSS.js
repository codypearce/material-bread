import React from 'react';
import { Appbar, IconButton, Fab } from '../../../src/';

const BrowserCSS = () => {
  return (
    <div className="browser">
      <div className="browser_bar">
        <div className="browser_bar_btns">
          <div className="browser_bar_btn browser_bar_btn--close" />
          <div className="browser_bar_btn browser_bar_btn--mini" />
          <div className="browser_bar_btn browser_bar_btn--resize" />
        </div>
      </div>
      <div className="browser_body">
        <Appbar
          navigation={<IconButton color="white" size={20} name={'menu'} />}
          actionItems={[
            <IconButton key={1} color="white" size={20} name={'search'} />,
            <IconButton key={2} color="white" size={20} name={'more-vert'} />,
          ]}
          style={{ height: 15 }}
        />

        {/* <div className="browser_body_title">A web page</div> */}
        {/* <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" />
        <div className="browser_body_content" /> */}
      </div>
    </div>
  );
};

export default BrowserCSS;
