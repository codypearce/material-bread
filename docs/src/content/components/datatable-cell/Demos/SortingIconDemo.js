import React from 'react';
import { ComponentDemo } from '@components';
import { DataTableRow, DataTableCell } from '../../../../../../src/index';

export const code = `class ChipPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortingIcon: 'down',
    }
  }
  render() {
    return (
        <DataTableRow>
            <DataTableCell
                text={'Desert'}
                type={'header'}
                borderRight
                relativeWidth={2}
            />
            <DataTableCell
                text={'Calories'}
                type={'header'}
                sortingIcon={this.state.sortingIcon}
                onPress={() =>
                this.setState({
                    sortingIcon: this.state.sortingIcon == 'up' ? 'down' : 'up',
                })
                }
                right
            />
            <DataTableCell text={'Fat (g)'} type={'header'} right />
            <DataTableCell text={'Carbs (g)'} type={'header'} right />
            <DataTableCell text={'Protein (g)'} type={'header'} right />
        </DataTableRow>
    );
  }
}
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'SortingIcon'}
    sectionHref={`${pageHref}#sorting-icon`}
    sectionId={'sorting-icon'}
    code={code}
    scope={{ DataTableRow, DataTableCell }}
  />
);
export default SubtitleDemo;
