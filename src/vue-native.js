import {
  Hoverable,
  shadow,
  Anchor,
  Appbar,
  AppbarBottom,
  Avatar,
  Backdrop,
  Badge,
  Banner,
  BottomNavigation,
  BottomNavigationItem,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  DataTable,
  DataTableHeader,
  DataTableCell,
  DataTablePagination,
  DataTableRow,
  Dialog,
  Drawer,
  DrawerHeader,
  DrawerItem,
  DrawerSection,
  DrawerBottom,
  Divider,
  Fab,
  FabSpeedDial,
  Icon,
  IconButton,
  List,
  ListSection,
  ListExpand,
  ListItem,
  Menu,
  MenuItem,
  ProgressBar,
  ProgressCircle,
  RadioButton,
  Ripple,
  Select,
  Searchfield,
  Searchbar,
  SheetBottom,
  SheetSide,
  Slider,
  Snackbar,
  SwipeNav,
  Switch,
  Tabs,
  Tab,
  TextField,
  TextFieldHelperText,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Overline,
  BreadProvider,
  Colors,
  ThemeContext,
} from './index';

const VueMaterialBread = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    Vue.component('mb-hoverable', Hoverable);
    Vue.component('mb-shadow', shadow);
    Vue.component('mb-anchor', Anchor);
    Vue.component('mb-appbar', Appbar);
    Vue.component('mb-AppbarBottom', AppbarBottom);
    Vue.component('mb-avatar', Avatar);
    Vue.component('mb-backdrop', Backdrop);
    Vue.component('mb-badge', Badge);
    Vue.component('mb-banner', Banner);

    Vue.component('mb-bottom-navigation', BottomNavigation);
    Vue.component('mb-bottom-navigation-item', BottomNavigationItem);
    Vue.component('mb-button', Button);
    Vue.component('mb-card', Card);
    Vue.component('mb-card-actions', CardActions);
    Vue.component('mb-card-content', CardContent);
    Vue.component('mb-card-header', CardHeader);
    Vue.component('mb-card-media', CardMedia);
    Vue.component('mb-checkbox', Checkbox);
    Vue.component('mb-chip', Chip);
    Vue.component('mb-data-table', DataTable);
    Vue.component('mb-data-table-header', DataTableHeader);
    Vue.component('mb-data-table-cell', DataTableCell);

    Vue.component('mb-data-table-pagination', DataTablePagination);
    Vue.component('mb-data-table-row', DataTableRow);
    Vue.component('mb-dialog', Dialog);
    Vue.component('mb-drawer', Drawer);
    Vue.component('mb-drawer-header', DrawerHeader);
    Vue.component('mb-drawer-item', DrawerItem);
    Vue.component('mb-drawer-section', DrawerSection);
    Vue.component('mb-drawer-bottom', DrawerBottom);
    Vue.component('mb-divider', Divider);
    Vue.component('mb-fab', Fab);
    Vue.component('mb-fab-speed-dial', FabSpeedDial);
    Vue.component('mb-icon', Icon);
    Vue.component('mb-icon-button', IconButton);
    Vue.component('mb-list', List);
    Vue.component('mb-list-section', ListSection);
    Vue.component('mb-list-expand', ListExpand);
    Vue.component('mb-list-item', ListItem);
    Vue.component('mb-menu', Menu);
    Vue.component('mb-menu-item', MenuItem);
    Vue.component('mb-progress-bar', ProgressBar);
    Vue.component('mb-progress-circle', ProgressCircle);
    Vue.component('mb-radio-button', RadioButton);
    Vue.component('mb-ripple', Ripple);
    Vue.component('mb-select', Select);
    Vue.component('mb-search-field', Searchfield);
    Vue.component('mb-search-bar', Searchbar);
    Vue.component('mb-sheet-bottom', SheetBottom);
    Vue.component('mb-sheet-side', SheetSide);
    Vue.component('mb-slider', Slider);
    Vue.component('mb-snackbar', Snackbar);
    Vue.component('mb-swipe-nav', SwipeNav);
    Vue.component('mb-switch', Switch);
    Vue.component('mb-tabs', Tabs);
    Vue.component('mb-tab', Tab);
    Vue.component('mb-text-field', TextField);
    Vue.component('mb-text-field-helper-text', TextFieldHelperText);
    Vue.component('mb-toggle-button', ToggleButton);
    Vue.component('mb-toggle-button-group', ToggleButtonGroup);
    Vue.component('mb-tooltip', Tooltip);
    Vue.component('mb-heading', Heading);
    Vue.component('mb-subtitle', Subtitle);
    Vue.component('mb-body-text', BodyText);
    Vue.component('mb-caption', Caption);
    Vue.component('mb-overline', Overline);
    Vue.component('mb-bread-provider', BreadProvider);
    Vue.component('mb-colors', Colors);
    Vue.component('mb-theme-context', ThemeContext);
  },
};

export default VueMaterialBread;
