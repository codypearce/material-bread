import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DataTable, DataTableRow, DataTableCell } from '../../../../src';

export default class PropsTable extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    return (
      <DataTable>
        <DataTableRow style={{ backgroundColor: '#eee' }}>
          <DataTableCell text={'Name'} type={'header'} borderRight />
          <DataTableCell text={'Description'} type={'header'} flex={2} />
          <DataTableCell text={'Type'} type={'header'} />
          <DataTableCell text={'Default'} type={'header'} />
        </DataTableRow>
        {data.map(row => (
          <DataTableRow key={row.name}>
            <DataTableCell text={row.name} borderRight />
            <DataTableCell text={row.description} flex={2} />
            <DataTableCell text={row.type} />
            <DataTableCell text={row.defaultValue} right />
          </DataTableRow>
        ))}
      </DataTable>
    );
  }
}
