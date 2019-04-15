import { createTableData } from '../../../utils/createPropData';
const propData = [
  [
    'animationTime',
    'How long the drawer animation should be, in ms',
    'number',
    '200',
  ],
  [
    'appbar',
    'Render appbar above drawer and page content for clipping purposes',
    'node',
    '',
  ],
  ['contentContainerStyle', 'Styles wrapper around page content', 'object', ''],
  ['drawerContent', 'Components displayed inside the drawer', 'node', ''],
  ['drawerStyle', 'Styles drawer', 'object', ''],
  [
    'fullHeight',
    'Drawer takes up full height of the page so conent is not scrolled',
    'bool',
    'false',
  ],
  ['onClose', 'Callback when clicking outside of drawer', 'func', ''],
  [
    'pageHeight',
    'Override calculated pageHeight, useful for demos as shown',
    'number',
    'ScreenHeight',
  ],

  [
    'pageWidth',
    'Override calculated pageWidth, useful pages that do not take up full space',
    'number',
    'ScreenWidth',
  ],
  ['position', 'Position of drawer', 'string', 'absolute'],
  ['open', 'Whether drawer is shown or hidden', 'bool', 'false'],
  ['style', 'Styles container element', 'object', ''],
  ['scrim', 'Whether scrim is shown', 'bool', 'true'],
  ['scrimColor', 'Color of scrim', 'object', 'black'],
  ['scrimOpacity', 'The ending opacity for the scim', 'number', '.4'],
  [
    'type',
    'Determines the type of drawer from modal, push, and permanenent',
    'string',
    'modal',
  ],

  [
    'width',
    'Specific drawer width in pixels, will override widthPercentage',
    'number',
    '240',
  ],
  [
    'widthPercentage',
    'Percentage of pageWidth the drawer should take up',
    '0-1',
    '.40',
  ],
];

export default createTableData(propData);
