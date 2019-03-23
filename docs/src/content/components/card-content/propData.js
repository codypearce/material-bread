import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['onPress', 'Callback func on container', 'func', ''],
  [
    'rippleProps',
    'Props spread to ripple if onPress is supplied',
    'object',
    '',
  ],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
