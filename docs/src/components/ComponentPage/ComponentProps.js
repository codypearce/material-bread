import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropsTable, ComponentDescription, Section } from '@components';

class ComponentProps extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    pageHref: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    propData: PropTypes.array,
  };

  render() {
    const { pageHref, description, propData } = this.props;
    return (
      <Section name="Props" href={`${pageHref}#props`} id="props">
        <ComponentDescription text={description} />
        <div
          style={{
            width: 'auto',
            overflowX: 'auto',
            backgroundColor: 'transparent',
            boxShadow:
              '0 2px 4px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.08)',
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}>
          <PropsTable data={propData} />
        </div>
      </Section>
    );
  }
}

export default ComponentProps;
