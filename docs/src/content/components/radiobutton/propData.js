import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['checked', 'Whether radiobutton is checked', 'bool', ''],
  ['disabled', 'Whether radiobutton is disabled', 'bool', ''],
  ['error', 'Toggles error state', 'bool', ''],
  ['label', 'Text shown next to radiobutton', 'string', ''],
  ['labelPos', 'Position right or left of text', 'string', ''],
  ['labelStyle', 'Styles on label', 'object', ''],
  ['onPress', 'Call back on radioButton', 'func', ''],
  ['radioButtonColor', 'Color of dot and active border', 'string', ''],
  ['rippleColor', 'Radio Button ripple color', 'string', ''],
  ['style', 'Styles root element', 'object', ''],
  ['uncheckedBorderColor', 'Color of unchecked border', 'string', ''],
];

export default createTableData(propData);
