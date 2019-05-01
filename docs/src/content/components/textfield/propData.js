import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['containerStyle', 'Styles the wrapping element', 'object', ''],
  ['disabled', 'Whether component is disabled', 'bool', ''],
  ['error', 'Toggles displaying error', 'bool', ''],
  ['focused', 'Manual control of focus', 'bool', ''],
  ['helperText', 'Renders text under the TextField', 'string', ''],
  ['helperVisible', 'Wether or not helperText is visible', 'bool', ''],
  ['helperTextStyle', 'Style of helpertext under the textfield', 'object', ''],
  ['label', 'Display label within textfield', 'string', ''],
  ['labelColor', 'Color of label within textfield', 'string', ''],
  ['labelStyle', 'Style of label within textfield', 'object', ''],
  ['leadingIcon', 'Render arbitrary node on the left the input', 'node', ''],
  ['onBlur', 'Callback on input blur', 'func', ''],
  ['onFocus', 'Callback on input focus', 'func', ''],
  ['prefix', 'Renders text node on the far leeft', 'node', ''],
  ['style', 'Styles input element', 'object', ''],
  ['suffix', 'Renders text node on the far right', 'node', ''],
  ['trailingIcon', 'Render arbitrary node on the right the input', 'node', ''],
  ['underlineColor', 'Color of underline when inactive', 'string', ''],
  [
    'underlineActiveColor',
    'Color of underline when active',
    'string',
    'theme.main.primary',
  ],
];

export default createTableData(propData);
