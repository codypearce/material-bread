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
    'onSwipeLeft',
    'Callback on swiping left, usually to close sheet',
    'func',
    '',
  ],
  [
    'onSwipeRight',
    'Callback on swiping right, usually to close sheet',
    'func',
    '',
  ],
  [
    'pageHeight',
    "Manually control the height of the page, useful for demos or sheets that shouldn't take up the whole page",
    'number',
    'ScreenHeight',
  ],
  [
    'pageWidth',
    "Manually control the width of the page, useful for demos or sheets that shouldn't take up the whole page",
    'number',
    'ScreenHeight',
  ],
  ['side', 'Determines the side the sheet appears on', 'string', 'right'],
  ['style', 'Styles sheet element', 'object', ''],

  ['visible', 'Toggles Sheet animation', 'bool', ''],
  [
    'widthPercentage',
    'Percentage of the screen the sheet should take up on mobile',
    'number',
    '.8',
  ],
  ['wrapperStyles', 'Styles wrapper around the whole page', 'object', ''],
];

export default createTableData(propData);
