import { StyleSheet } from 'react-native';

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
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
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

  button: {
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#2196f3',
  },
  outlinedButton: {
    borderColor: 'rgba(0,0,0,.29)',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
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
