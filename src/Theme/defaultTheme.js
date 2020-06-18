import { StyleSheet } from 'react-native';
import shadow from '../Utils/Shadow/shadow';

export default {
  primary: {
    main: '#1e88e5',
    dark: '#005cb2',
    light: '#6ab7ff',
  },
  secondary: {
    main: '#f50057',
    dark: '#c51162',
    light: '#ff4081',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
  },
  textColor: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  text: {},
  background: {
    default: '#fafafa',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: 2,
  },
  divider: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.12)',
  },
  drawer: {
    position: 'absolute',
    zIndex: 100,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,.12)',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  drawerHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,.12)',
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  drawerHeaderAvatarContainer: {
    marginBottom: 20,
  },
  drawerHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0,0,0,.87)',
  },
  drawerHeaderSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: 'rgba(0,0,0,.67)',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 8,
    zIndex: 10,
  },
  drawerItemActive: {
    backgroundColor: 'rgba(30, 136, 229, .2)',
    color: '#1e88e5',
  },
  drawerItemText: {
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    fontWeight: '500',
    zIndex: 10,
  },
  drawerItemIcon: {
    color: 'grey',
    size: 20,
  },
  button: {
    borderRadius: 4,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    height: 36,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    display: 'flex',
  },
  buttonText: {
    fontStyle: 'normal',
    letterSpacing: 0.5,
    color: '#2196f3',
  },
  outlinedButton: {
    borderColor: 'rgba(0,0,0,.29)',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    boxSizing: 'border-box',
  },
  containedButton: {
    paddingHorizontal: 16,
    backgroundColor: '#2196f3',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  bodyTextTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.25,
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  headingOne: {
    fontWeight: '300',
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: -1.5,
  },
  headingTwo: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 60,
    letterSpacing: -0.5,
  },
  headingThree: {
    fontSize: 48,
    lineHeight: 48,
  },
  headingFour: {
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.25,
  },
  headingFive: {
    fontSize: 24,
    lineHeight: 24,
  },
  headingSix: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
  overline: {
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    height: 56,
    paddingHorizontal: 16,
  },
  searchBarNavigationIcon: {
    color: 'black',
    size: 24,
  },
  searchBarcloseIcon: {
    color: 'black',
    size: 24,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    height: 30,
    ...shadow(0),
  },
  subtitleOne: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  subtitleTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
};
