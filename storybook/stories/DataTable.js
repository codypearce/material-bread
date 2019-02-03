import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import {
  ThemeContext,
  DataTable,
  DataTableHeader,
  DataTableItem,
  DataTablePagination,
  DataTableHeaderItem,
  DataTableRow,
} from '../../src/index';

storiesOf('Data Table', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Data Table', () => (
    <ThemeContext.Provider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Data Table</Text>
      </View>
      <DataTable>
        <DataTableHeader showcheckBox>
          <DataTableHeaderItem>Header</DataTableHeaderItem>
          <DataTableHeaderItem>Text Column</DataTableHeaderItem>
          <DataTableHeaderItem right>No. Col</DataTableHeaderItem>
        </DataTableHeader>

        <DataTableRow showcheckBox>
          <DataTableItem>Row Item 1</DataTableItem>
          <DataTableItem>Row Data 1</DataTableItem>
          <DataTableItem right>1000</DataTableItem>
        </DataTableRow>

        <DataTableRow showcheckBox>
          <DataTableItem>Row Item 2</DataTableItem>
          <DataTableItem>Row Data 2</DataTableItem>
          <DataTableItem right>2000</DataTableItem>
        </DataTableRow>

        <DataTableRow showcheckBox>
          <DataTableItem>Row Item 3</DataTableItem>
          <DataTableItem>Row Data 3</DataTableItem>
          <DataTableItem right>3000</DataTableItem>
        </DataTableRow>

        <DataTablePagination page={1} numberOfPages={3} perPage={3} />
      </DataTable>
    </ThemeContext.Provider>
  ));
