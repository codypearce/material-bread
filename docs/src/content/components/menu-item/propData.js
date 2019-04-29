import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['disabled', 'Toggles disabled', 'bool', ''],
  ['icon', 'Renders icon on the left of the text', 'node', ''],
  ['keyboardCommand', 'Renders arbiraty node on the far right', 'node', ''],
  ['onPress', 'Callback on MenuItem', 'func', ''],
  ['style', 'Styles root element', 'object', ''],
  ['text', 'Renders main text', 'string', ''],
  ['textStyle', 'Styles menu text', 'object', ''],
];

export default createTableData(propData);
