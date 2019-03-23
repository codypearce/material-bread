import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'onPress',
    'Call back when card is pressed, adds ripple to whole component',
    'func',
    '',
  ],
  ['outlined', 'Adds a hairlineWidth border around card', 'bool', ''],
  ['radius', 'Border radius of card', 'number', '4'],
  ['rippleProps', 'Object is spread to Ripple Component', 'object', ''],
  ['shadow', 'Adds shadow for all platforms', 'number', '1'],
  ['style', 'Styles root element', 'object', ''],
];

export default createTableData(propData);
