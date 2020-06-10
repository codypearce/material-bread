import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['actionItems', 'Array of objects displaying tab items', 'array', ''],
  [
    'active',
    'Active item is handled internally with BottomNavigatino, but you can controll it manually with this prop',
    'bool',
    '',
  ],

  [
    'badgeProps',
    'Each prop is a key, adding any prop will show the badge over the icon.',
    'object',
    '',
  ],

  [
    'handleChange',
    'Is set by BottomNavigation prop, but can be overwritten individually here',
    'func',
    '',
  ],

  ['horizontal', 'Whether to layout an item horizontally', 'bool', ''],

  ['icon', 'Name of material icon displayed', 'string', ''],

  ['isLandscape', 'Is the screen in landscape mode', 'bool', ''],

  ['label', 'Text to display underneath the icon', 'string', ''],

  [
    'maxWidth',
    'The maximum width of the item',
    'number',
    'Min between {smallest window dimension/# of items} and 168',
  ],

  ['onItemLayout', 'Called when each item is rendered', 'func', ''],
  ['onPress', 'callBack to fire when clicking item', 'func', ''],

  [
    'showOneItem',
    'Set by BottomNavigation prop, but can be overwritten individually here',
    'bool',
    '',
  ],

  [
    'showLabel',
    'Set by BottomNavigation prop, but can be overwritten individually here',
    'bool',
    'true',
  ],

  ['rippleProps', 'Props applied to the ripple', 'object', ''],

  ['style', 'Styles root element', 'object', ''],

  [
    'value',
    'Set by BottomNavigation prop as index, but can be overwritten individually here',
    'number',
    '',
  ],
];

export default createTableData(propData);
