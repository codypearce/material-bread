import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['activeTextColor', 'Color when item is active', 'string', '#fff'],
  ['icon', 'Name of icon component above text', 'string', ''],
  ['iconStyles', 'Styles for icon element', 'object', ''],
  [
    'inActiveTextColor',
    'Color when item is active',
    'string',
    'rgba(255,255,255, .65)',
  ],

  ['label', 'Displays text under an icon', 'string', ''],
  ['onPress', 'Callback on item', 'func', ''],

  ['rippleProps', 'Props spread to root ripple component', 'object', ''],

  ['style', 'Styles root element', 'object', ''],
  ['textStyle', 'Styles for text element', 'object', ''],
];

export default createTableData(propData);
