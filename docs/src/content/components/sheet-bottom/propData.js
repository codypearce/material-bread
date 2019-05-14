import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'cardVerticalPadding',
    'Padding vertical on the sheet, this used in calculating the position',
    'number',
    '20',
  ],

  ['duration', 'How long the hide animation takes', 'number', '200ms'],
  [
    'onBackdropPress',
    'Callback when mask is pressed, usually to close sheet',
    'func',
    '',
  ],
  [
    'onSwipeDown',
    'Callback on swiping down, usually to close sheet',
    'func',
    '',
  ],
  ['onSwipeUp', 'Callback on swiping up', 'func', ''],
  [
    'pageHeight',
    "Manually control the height of the page, useful for demos or sheets that shouldn't take up the whole page",
    'number',
    'ScreenHeight',
  ],
  ['style', 'Styles sheet element', 'object', ''],

  ['visible', 'Toggles Sheet animation', 'bool', ''],
  ['wrapperStyles', 'Styles wrapper around the whole page', 'object', ''],
];

export default createTableData(propData);
