import React from 'react';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          <main>{children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
