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
      <DataTable
        style={{ boxShadow: '2px 2px 16px 0px rgba(46, 61, 73, 0.10)' }}>
        <DataTableRow
          style={{
            backgroundColor: '#050342',
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
          }}>
          <DataTableCell
            text={'Name'}
            type={'header'}
            textStyle={{ color: 'white' }}
          />
          <DataTableCell
            text={'Description'}
            type={'header'}
            flex={2}
            textStyle={{ color: 'white' }}
          />
          <DataTableCell
            text={'Type'}
            type={'header'}
            textStyle={{ color: 'white' }}
          />
          <DataTableCell
            text={'Default'}
            type={'header'}
            textStyle={{ color: 'white', borderTopRightRadius: 6 }}
          />
        </DataTableRow>
        {data.map(row => (
          <DataTableRow key={row.name}>
            <DataTableCell text={row.name} />
            <DataTableCell text={row.description} flex={2} />
            <DataTableCell text={row.type} />
            <DataTableCell text={row.defaultValue} right />
          </DataTableRow>
        ))}
      </DataTable>
    );
  }
}
