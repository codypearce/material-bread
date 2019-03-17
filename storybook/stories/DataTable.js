import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import {
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTableRow,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Data Table', module).add('Data Table', () => (
  <Container>
    <Header title={'DataTable'} />

    <DataTable>
      <DataTableHeader>
        <DataTableCell text={'Desert'} type={'header'} borderRight flex={2} />
        <DataTableCell text={'Calories'} type={'header'} right />
        <DataTableCell text={'Fat (g)'} type={'header'} right />
        <DataTableCell text={'Carbs (g)'} type={'header'} right />
        <DataTableCell text={'Protein (g)'} type={'header'} right />
      </DataTableHeader>
      <DataTableRow>
        <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
        <DataTableCell text={'159'} right />
        <DataTableCell text={'6.0'} right />
        <DataTableCell text={'24'} right />
        <DataTableCell text={'4'} right />
      </DataTableRow>
      <DataTableRow>
        <DataTableCell text={'Ice Cream Sandwhich'} borderRight flex={2} />
        <DataTableCell text={'237'} right />
        <DataTableCell text={'9.0'} right />
        <DataTableCell text={'37'} right />
        <DataTableCell text={'4.3'} right />
      </DataTableRow>
      <DataTableRow>
        <DataTableCell text={'Eclair'} borderRight flex={2} />
        <DataTableCell text={'262'} right />
        <DataTableCell text={'16.0'} right />
        <DataTableCell text={'24'} right />
        <DataTableCell text={'6.0'} right />
      </DataTableRow>
    </DataTable>
  </Container>
));
