import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'actionItem',
    'Dispays arbitrary node on the far right of the item ',
    'node',
    '',
  ],
  ['disabled', 'Disables click functionality', 'bool', ''],
  ['icon', 'Dispays arbitrary icon to the left of text and media ', 'node', ''],
  [
    'leadingActionItem',
    'Dispays arbitrary node on the left right of the item ',
    'node',
    '',
  ],

  ['media', 'Dispays arbitrary node to the left of text', 'node', ''],
  ['onPress', 'Callback on listItem', 'func', ''],
  ['secondaryText', 'Secondary text, show under the main text', 'string', ''],
  ['selected', 'Whether the item is selected', 'bool', ''],
  ['style', 'Styles root element', 'object', ''],
  ['text', 'Main text for item', 'string', ''],
];

export default createTableData(propData);
