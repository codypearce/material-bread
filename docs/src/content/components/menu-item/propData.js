import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['disabled', 'Toggles disabled', 'bool', ''],
  ['onPress', 'Callback on MenuItem', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['textStyle', 'Styles menu text', 'object', ''],
];

export default createTableData(propData);
