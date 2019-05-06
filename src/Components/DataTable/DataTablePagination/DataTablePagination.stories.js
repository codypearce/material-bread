import React from 'react';

import {
  DataTable,
  DataTableCell,
  DataTableRow,
  DataTablePagination,
} from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';
import { storiesOf } from '../../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  page: 0,
  perPage: 2,
});

const data = [
  {
    name: 'Frozen Yogurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',
    protein: '4',
  },
  {
    name: 'Ice Cream Sandwhich',
    calories: '237',
    fat: '9.0',
    carbs: '37',
    protein: '4.3',
  },
  {
    name: 'Blizzard',
    calories: '480',
    fat: '3.4',
    carbs: '80',
    protein: '1',
  },
  {
    name: 'Frosty',
    calories: '200',
    fat: '2.0',
    carbs: '12',
    protein: '8',
  },
  {
    name: 'DillyBar',
    calories: '120',
    fat: '15',
    carbs: '30',
    protein: '10',
  },
  {
    name: 'PushPop',
    calories: '50',
    fat: '1',
    carbs: '2',
    protein: '2',
  },
];

export default storiesOf('Components|Data Table/Pagination', module)
  .addParameters({ jest: ['DataTable'] })

  .add('Simple', () => (
    <Container>
      <Header title={'DataTable Pagination'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <DataTable>
            <DataTableRow>
              <DataTableCell
                text={'Desert'}
                type={'header'}
                borderRight
                flex={2}
              />
              <DataTableCell text={'Calories'} type={'header'} right />
              <DataTableCell text={'Fat (g)'} type={'header'} right />
              <DataTableCell text={'Carbs (g)'} type={'header'} right />
              <DataTableCell text={'Protein (g)'} type={'header'} right />
            </DataTableRow>
            {data
              .slice(
                state.page * state.perPage,
                state.page * state.perPage + state.perPage,
              )
              .map(row => (
                <DataTableRow key={row.name}>
                  <DataTableCell text={row.name} borderRight flex={2} />
                  <DataTableCell text={row.calories} right />
                  <DataTableCell text={row.fat} right />
                  <DataTableCell text={row.carbs} right />
                  <DataTableCell text={row.protein} right />
                </DataTableRow>
              ))}

            <DataTablePagination
              page={state.page}
              numberOfPages={data.length / state.perPage}
              numberOfRows={data.length}
              perPage={state.perPage}
              onChangePage={page => store.set({ page: page })}
              onChangeRowsPerPage={perPage => store.set({ perPage: perPage })}
            />
          </DataTable>
        )}
      </State>
    </Container>
  ));
