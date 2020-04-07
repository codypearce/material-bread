import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationDuration',
    'Length of each animation loop in ms',
    'number',
    '1000',
  ],
  ['animationEasing', 'Easaing function', 'func', ''],
  ['color', 'Color of circle', 'string', ''],
  ['determinate', 'Whether circle continues to animate or not', 'bool', ''],
  [
    'indicatorStartPosition',
    'Where the indicator starts before the animation begins',
    'number',
    '0',
  ],
  [
    'shouldAnimateFirstValue',
    'Whether the determinate value should animate at start',
    'bool',
    'true',
  ],
  ['size', 'Diameter of circle', 'number', '48'],
  ['style', 'Styles root element', 'object', ''],
  ['trackStyle', 'Styles track containing the indicator', 'object', ''],
  [
    'value',
    'Percent out of 100 the indicator should fill in determinate mode',
    'number',
    '',
  ],
  ['visible', 'Whether circle is visible or not', 'bool', ''],
  ['widthOfBorder', 'The width of the track', 'number', '10'],
];

export default createTableData(propData);
