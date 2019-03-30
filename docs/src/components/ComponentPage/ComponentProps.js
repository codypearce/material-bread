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
        <PropsTable data={propData} />
      </Section>
    );
  }
}

export default ComponentProps;
