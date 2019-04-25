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

  ['icon', 'Name of material icon displayed', 'string', ''],

  ['label', 'Text to display underneath the icon', 'string', ''],

  ['onPress', 'callBack to fire when clicking item', 'func', ''],

  [
    'showLabel',
    'Set by BottomNavigation prop, but can be overwritten individually here',
    'bool',
    '',
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
