import React from 'react';
import { ComponentDemo } from '@components';
import {
  DataTable,
  DataTableRow,
  DataTableCell,
} from '../../../../../../src/index';

export const code = `class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        checkedOne: false,
        checkedTwo: false,
        checkedThree: false,
    }
  }
  render() {
    return (
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
            <DataTableRow
                hover
                showCheckbox
                selected={this.state.checkedOne}
                onPressCheckBox={() =>
                    this.setState({ checkedOne: !this.state.checkedOne })
                }>
                <DataTableCell text={'Frozen yogurt'} borderRight flex={2} />
                <DataTableCell text={'159'} right />
                <DataTableCell text={'6.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'4'} right />
            </DataTableRow>
            <DataTableRow
                hover
                showCheckbox
                selected={this.state.checkedTwo}
                onPressCheckBox={() =>
                    this.setState({ checkedTwo: !this.state.checkedTwo })
                }>
                <DataTableCell text={'Ice Cream Sandwich'} borderRight flex={2} />
                <DataTableCell text={'237'} right />
                <DataTableCell text={'9.0'} right />
                <DataTableCell text={'37'} right />
                <DataTableCell text={'4.3'} right />
            </DataTableRow>
            <DataTableRow
                hover
                showCheckbox
                selected={this.state.checkedThree}
                onPressCheckBox={() =>
                    this.setState({ checkedThree: !this.state.checkedThree })
                }>
                <DataTableCell text={'Eclair'} borderRight flex={2} />
                <DataTableCell text={'262'} right />
                <DataTableCell text={'16.0'} right />
                <DataTableCell text={'24'} right />
                <DataTableCell text={'6.0'} right />
            </DataTableRow>
        </DataTable>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Checkbox'}
    sectionHref={`${pageHref}#checkbox`}
    sectionId={'checkbox'}
    code={code}
    scope={{ DataTable, DataTableRow, DataTableCell }}
  />
);
export default SubtitleDemo;
