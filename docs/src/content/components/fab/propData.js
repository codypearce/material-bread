import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['animated', 'Whether to animate when changing visible prop', 'bool', ''],
  ['backgroundColor', 'Background color for fab circle', 'object', ''],
  ['disabled', 'Whether fab is disabled', 'bool', 'false'],
  ['icon', 'Name of icon to show or an icon node', 'string || node', ''],
  ['label', 'String to show as extended fab', 'string', ''],
  ['mini', 'Toggles mini variant', 'bool', ''],
  ['onPress', 'Call back on button', 'func', ''],
  ['rippleColor', 'Color for ripple', 'string', ''],
  ['shadow', 'Shadow on fab', 'number', '10'],
  ['style', 'Styles root element', 'object', ''],
  ['visible', 'Toggles visibility', 'bool', ''],
];

export default createTableData(propData);
