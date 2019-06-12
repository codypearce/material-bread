import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ],
  ['animationEasing', 'Easing function for bar animation', 'func', ''],
  ['color', 'Color of bar', 'string', ''],
  ['determinate', 'Whether bar continues to animate or not', 'bool', ''],

  ['height', 'Height of track and indicator', 'number', '4'],
  [
    'indicatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ],

  ['style', 'Styles root element', 'object', ''],
  ['trackStyle', 'Styles track containing the indicator', 'object', ''],
  [
    'value',
    'Percent out of 100 the indcator should fill in determinate mode',
    'number',
    '',
  ],
  ['visible', 'Whether bar is visible or not', 'bool', ''],
];

export default createTableData(propData);
