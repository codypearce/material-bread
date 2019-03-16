import { StyleSheet } from 'react-native';

export default {
  base: {
    primary: '#1e88e5',
    primaryDark: '#005cb2',
    primaryLight: '#6ab7ff',
    secondary: '#E91E63',
  },
  button: {
    padding: 8,
    color: '#2196f3',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
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
  paper: {
    backgroundColor: 'white',
    borderRadius: 2,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    opacity: 0.12,
    backgroundColor: 'black',
    marginVertical: 16,
  },
};
