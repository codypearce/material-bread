import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['backgroundColor', 'Background color for fab circle', 'object', ''],
  ['disabled', 'Whether fab is disabled', 'bool', 'false'],

  ['icon', 'Name of icon to show', 'string', ''],
  ['onPress', 'Call back on button', 'func', ''],
  ['rippleColor', 'Color for ripple', 'string', ''],
  ['shadow', 'Shadow on fab', 'number', '10'],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
