import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['disabled', 'Whether component is disabled', 'bool', ''],
  ['onBlur', 'Callback on input blur', 'func', ''],
  ['onFocus', 'Callback on input focus', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
