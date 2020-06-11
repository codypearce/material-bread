import React, { RefObject } from 'react'
import {
  StyleProp,
  TextStyle,
  View,
  StyleSheet,
  StyleSheetProperties,
  Image,
  GestureResponderEvent,
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewPropTypes,
  ViewProps,
  Animated,
  ScrollViewProps,
} from 'react-native'

type Color = string

export interface Theme {
  primary: {
    main: Color
    dark: Color
    light: Color
  }
  secondary: {
    main: Color
    dark: Color
    light: Color
  }
  textColor: {
    primary: Color
    secondary: Color
    disabled: Color
    hint: Color
  }
  text: {}
  background: {
    default: Color
  }
  action: {
    active: Color
    hover: Color
    hoverOpacity: number
    selected: Color
    disabled: Color
    disabledBackground: Color
    paper: {
      backgroundColor: Color
      borderRadius: number
    }
    divider: {
      width: string
      backgroundColor: Color
    }
    buttonText: {
      fontSize: number
      fontWight: string
      letterSpacing: number
      color: Color
    }
    outlinedButton: {
      borderColor: Color
      borderWidth: StyleSheetProperties['hairlineWidth']
      paddingOrizontal: number
    }
    containedButton: {
      paddingHorizontal: number
      backgroundColor: Color
    }
    bodyText: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    bodyTextTwo: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    caption: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    headingOne: {
      fontWeight: string
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    headingTwo: {
      fontWeight: string
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    headingThree: {
      fontSize: number
      lineHeight: number
    }
    headingFour: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    headingFive: {
      fontSize: number
      lineHeight: number
    }
    headingSix: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
      fontWeight: string
    }
    overline: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
      textTransform: string
    }
    subtitleOne: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
    }
    subtitleTwo: {
      fontSize: number
      lineHeight: number
      letterSpacing: number
      fontWeight: string
    }
  }
}

export const ThemeContext: React.Context<Theme>

export const defaultTheme: Theme

export type WithThemeProps = {
  theme: Theme
}

type WithTheme = <P extends object>(
  Component: React.ElementType<P>,
) => React.ElementType<Omit<P, keyof WithThemeProps>>

export const withTheme: WithTheme

export interface BreadProviderProps {
  children: React.ReactNode
  value?: Theme
}

export class BreadProvider extends React.Component<BreadProviderProps> {
  render(): React.ReactElement
}

export interface AnchorProps {
  url?: string
  children?: React.ReactNode
  target?: string
  testID?: string
}

export class Anchor extends React.Component<AnchorProps> {
  render(): React.ReactElement
}

export interface HoverableProps {
  children?: React.ReactNode | ((...args: any[]) => any)
  onHoverIn?: (...args: any[]) => void
  onHoverOut?: (...args: any[]) => void
  testID?: string
}

export class Hoverable extends React.Component<HoverableProps> {
  render(): React.ReactElement
}

export type ShadowElevation =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

export type ShadowAndroidReturn = {
  elevation: ShadowElevation
}

export type ShadowDefaultReturn = {
  shadowColor: Color
  shadowOffset: {
    width: number
    height: number
  }
  shadowOpacity: number
  shadowRadius: number
}

export const shadow: (
  elevation: ShadowElevation,
) => ShadowAndroidReturn | ShadowDefaultReturn

export type ColorRange = {
  50: Color
  100: Color
  200: Color
  300: Color
  400: Color
  500: Color
  600: Color
  700: Color
  800: Color
  900: Color
  A100: Color
  A200: Color
  A400: Color
  A700: Color
}

export const Colors: {
  amber: ColorRange
  blue: ColorRange
  blueGrey: ColorRange
  brown: ColorRange
  cyan: ColorRange
  deepOrange: ColorRange
  deepPurple: ColorRange
  green: ColorRange
  grey: ColorRange
  indigo: ColorRange
  lightBlue: ColorRange
  lightGreen: ColorRange
  lime: ColorRange
  orange: ColorRange
  pink: ColorRange
  purple: ColorRange
  red: ColorRange
  teal: ColorRange
  yellow: ColorRange
}

export interface AvatarProps {
  style?: StyleProp<any>
  theme?: Theme
  color?: Color
  type?: 'image' | 'icon' | 'text'
  size?: number
  contentSize?: number
  contentColor?: Color
  contentStyles?: StyleProp<any>
  content?: string
  image?: React.ReactNode
  onPress?: (e: GestureResponderEvent) => void
  ripple?: boolean
  rippleProps?: RippleProps
  testID?: string
  children?: React.ReactNode
}

export class Avatar extends React.Component<AvatarProps> {
  render(): React.ReactElement
}

export interface BadgeProps {
  color?: Color
  textColor?: Color
  content?: string | number
  maxValue?: number
  children?: React.ReactNode
  size?: number
  style?: StyleProp<any>
  position?: 'right' | 'left'
  onPress?: (e: GestureResponderEvent) => void

  theme?: Theme
  containerStyle?: StyleProp<any>
  right?: number | string
  left?: number | string
  top?: number | string

  visible?: boolean
  testID?: string
}

export class Badge extends React.Component<BadgeProps> {
  render(): React.ReactElement
}

export interface BaseButtonProps {
  text?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  textStyle?: StyleProp<TextStyle>

  theme?: Theme
  style?: StyleProp<any>
  children?: React.ReactNode

  type?: 'outlined' | 'contained' | 'flat' | 'text'
  onPress?: (e: GestureResponderEvent) => void

  loading?: boolean
  loader?: React.ReactNode
  hideLabel?: boolean

  color?: Color
  radius?: number

  fullWidth?: boolean
  density?: boolean

  disabled?: boolean
  disableRipple?: boolean

  useInputCasing?: boolean

  textColor?: Color
  buttonStyles?: StyleProp<any>
  rippleColor?: Color
  onPressIn?: (e: GestureResponderEvent) => void
  onPressOut?: (e: GestureResponderEvent) => void

  testID?: string
}

export interface ContainedButtonProps {
  disabled?: boolean
  color?: Color
  textColor?: Color
  rippleColor?: Color
  theme?: Theme
  onPressIn?: (e: GestureResponderEvent) => void
  onPressOut?: (e: GestureResponderEvent) => void
  containerStyle?: StyleProp<any>
  radius?: number
  fullWidth?: boolean
}

export interface FlatButtonProps {
  disabled?: boolean
  color?: Color
  textColor?: Color
  rippleColor?: Color
  theme?: Theme
  onPressIn?: (e: GestureResponderEvent) => void
  onPressOut?: (e: GestureResponderEvent) => void
  containerStyle?: StyleProp<any>
}

export interface OutlinedButtonProps {
  disabled?: boolean
  color?: Color
  textColor?: Color
  rippleColor?: Color
  theme?: Theme
  borderSize?: number
  containerStyle?: StyleProp<any>
}

export interface TextButtonProps {
  disabled?: boolean
  color?: Color
  textColor?: Color
  rippleColor?: Color
  theme?: Theme
  containerStyle?: StyleProp<any>
}

type SpecificButtonProps =
  | ContainedButtonProps
  | FlatButtonProps
  | OutlinedButtonProps
  | TextButtonProps

export type ButtonProps = BaseButtonProps & SpecificButtonProps

export class Button extends React.Component<ButtonProps> {
  render(): React.ReactElement
}

export interface CheckboxProps {
  checked: boolean

  disabled?: boolean
  onPress?: (e: GestureResponderEvent) => void
  rippleColor?: Color
  checkboxColor?: Color
  unCheckedColor?: Color
  style?: StyleProp<any>
  checkboxStyle?: StyleProp<any>
  theme?: Theme
  rippleMatchesCheckbox?: boolean
  indeterminate?: boolean

  label?: string
  labelStyle?: StyleProp<any>
  labelPos?: string

  icon?: React.ReactNode | string
  size?: number
  checkedIcon?: React.ReactNode | string

  ios?: boolean

  error?: boolean
  testID?: string
}

export class Checkbox extends React.Component<CheckboxProps> {
  render(): React.ReactElement
}

export interface ChipProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  theme?: Theme

  chipStyle?: StyleProp<any>

  color?: Color
  themeColor?: Color
  radius?: number

  onPress?: (e: GestureResponderEvent) => void
  onDelete?: (...args: any[]) => void
  visible?: boolean

  text?: string
  textStyles?: StyleProp<any>

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode

  selected?: boolean
  disabled?: boolean
  testID?: string | (() => any)
}

export class Chip extends React.Component<ChipProps> {
  render(): React.ReactElement
}

export interface DividerProps {
  style?: StyleProp<any>
  theme?: Theme
  marginVertical?: number
  subheader?: string
  insetHeader?: number
  insetLeft?: number
  testID?: string
}

export class Divider extends React.Component<DividerProps> {
  render(): React.ReactElement
}

export interface FabProps {
  style?: StyleProp<any>
  backgroundColor?: Color
  onPress?: (e: GestureResponderEvent) => void
  disabled?: boolean
  rippleColor?: Color
  icon?: React.ReactNode | string
  shadow?: number
  mini?: boolean
  theme?: Theme
  children?: React.ReactNode
  visible?: boolean
  initialScale?: number
  animated?: boolean
  label?: string
  testID?: string
  containerStyle?: StyleProp<any>
}

export class Fab extends React.Component<FabProps> {
  render(): React.ReactElement
}

export interface IconProps {
  name: string

  style?: StyleProp<any>
  theme?: Theme
  color?: Color
  size?: number
  testID?: string
  iconComponent?: React.Component
}

export class Icon extends React.Component<IconProps> {
  render(): React.ReactElement
}

export interface IconButtonProps {
  name: string
  style?: StyleProp<any>
  theme?: Theme
  color?: Color
  size?: number
  onPress?: (e: GestureResponderEvent) => void
  rippleColor?: Color
  disabled?: boolean
  testID?: string
  iconComponent?: React.Component
}

export class IconButton extends React.Component<IconButtonProps> {
  render(): React.ReactElement
}

export interface ListExpandProps {
  expanded?: boolean
  onPress?: (e: GestureResponderEvent) => void
  children?: React.ReactNode
  style?: StyleProp<any>
  title?: string
  titleStyle?: StyleProp<any>
  theme?: Theme
  icon?: React.ReactNode
  expandIconStyle?: StyleProp<any>
  rippleProps?: RippleProps
}

export class ListExpand extends React.Component<ListExpandProps> {
  render(): React.ReactElement
}

export interface ListItemProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  onPress?: (e: GestureResponderEvent) => void
  disabled?: boolean
  selected?: boolean
  text?: string
  textProps?: StyleProp<TextProps>
  secondaryText?: string | React.ReactElement
  secondaryTextProps?: StyleProp<TextProps>
  media?: React.ReactNode
  icon?: React.ReactNode
  actionItem?: React.ReactNode
  leadingActionItem?: React.ReactNode
  textStyle?: StyleProp<TextStyle>
  secondaryTextStyle?: StyleProp<TextProps>
  rippleProps?: RippleProps
  backgroundColor?: Color
}

export class ListItem extends React.Component<ListItemProps> {
  render(): React.ReactElement
}

export interface ListSectionProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  label?: string
  labelStyle?: StyleProp<any>
  topDivider?: boolean
  bottomDivider?: boolean
  inset?: boolean
  contentStyle?: StyleProp<any>
  theme?: Theme
}

export class ListSection extends React.Component<ListSectionProps> {
  render(): React.ReactElement
}

export interface ListProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  shadow?: number
  subheader?: string
  testID?: string
}

export class List extends React.Component<ListProps> {
  render(): React.ReactElement
}

export interface ModalProps {
  buttons: React.ReactElement
  visible: boolean
  onRequestClose: (...args: any[]) => void
  onShow: (...args: any[]) => void
  onTouchOutside: (e: GestureResponderEvent) => void
  containerStyle: StyleProp<any>
  NativeModalProps: StyleProp<any>
  children: React.ReactNode
}

export class Modal extends React.Component<ModalProps> {
  render(): React.ReactElement
}

export interface PaperProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  theme?: Theme
  shadow?: number
  radius?: number
  testID?: string
  elevation?: number
}

export class Paper extends React.Component<PaperProps> {
  render(): React.ReactElement
}

export interface ProgressBarProps {
  visible: boolean

  color?: Color
  height?: number
  trackStyle?: StyleProp<any>
  determinate?: boolean
  indicatorStartPosition?: number
  animationEasing?: (...args: any[]) => any
  animationDuration?: number
  value?: number
  style?: StyleProp<any>
  theme?: Theme
  testID?: string
}

export class ProgressBar extends React.Component<ProgressBarProps> {
  render(): React.ReactElement
}

export interface ProgressCircleProps {
  color?: Color
  size?: number
  style?: StyleProp<any>
  animationDuration?: number
  animationEasing?: (...args: any[]) => any
  visible?: boolean
  determinate?: boolean
  widthOfBorder?: number
  testID?: string
}

export interface ProgressCircleDeterminateProps {
  value?: number
  size?: number
  thickness?: number
  color?: Color
  unfilledColor?: Color
  style?: StyleProp<any>
  children?: React.ReactNode
  animationMethod?: string
  animationConfig?: {}
  shouldAnimateFirstValue?: boolean
  onChange?: (...args: any[]) => void
  onChangeAnimationEnd?: (...args: any[]) => void
  noTrackColor?: boolean
}

export class ProgressCircle extends React.Component<
  ProgressCircleProps | ProgressCircleDeterminateProps
> {
  render(): React.ReactElement
}

export interface RadioButtonProps {
  checked: boolean

  disabled?: boolean
  onPress?: (e: GestureResponderEvent) => void
  rippleColor?: Color
  radioButtonColor?: Color
  uncheckedBorderColor?: Color
  style?: StyleProp<any>

  label?: string
  labelStyle?: StyleProp<any>
  labelPos?: string

  error?: boolean
  theme?: Theme
  testID?: string
}

export class RadioButton extends React.Component<RadioButtonProps> {
  render(): React.ReactElement
}

export interface RippleProps
  extends ViewProps,
    TouchableWithoutFeedbackProps {
  rippleColor?: Color
  rippleOpacity?: number
  rippleDuration?: number
  rippleSize?: number
  rippleContainerBorderRadius?: number
  rippleCentered?: boolean
  rippleSequential?: boolean
  rippleFades?: boolean
  disabled?: boolean
  displayUntilPressOut?: boolean

  onRippleAnimation?: (...args: any[]) => void
  testID?: string
}

export class Ripple extends React.Component<RippleProps> {
  render(): React.ReactElement
}

export interface SliderProps {
  value?: number
  values?: number[]
  sliderLength?: number
  min?: number
  max?: number
  step?: number
  disableOne?: boolean
  disableTwo?: boolean
  onValueChange?: (...args: any[]) => void
  onValueChangeEnd?: (...args: any[]) => void
  onValuesChange?: (...args: any[]) => void
  onValuesChangeEnd?: (...args: any[]) => void
  trackColor?: Color
  markerColor?: Color
  allowOverlap?: boolean
  style?: StyleProp<any>
  testID?: string
  markerSize?: number
  trackHeight?: number
  trackStyle?: StyleProp<any>
}

export class Slider extends React.Component<SliderProps> {
  render(): React.ReactElement
}

export interface SwitchProps {
  checked: boolean

  onPress?: (e: GestureResponderEvent) => void
  style?: StyleProp<any>
  trackStyle?: StyleProp<any>
  thumbStyle?: StyleProp<any>
  label?: React.ReactNode
  labelPos?: string
  theme?: Theme
  color?: Color
  loading?: boolean
  testID?: string
  width?: number
}

export class Switch extends React.Component<SwitchProps> {
  render(): React.ReactElement
}

export interface SearchfieldProps {
  color?: Color
  iconProps?: IconProps
  inputRef?: (...args: any[]) => any
  onBlur?: (...args: any[]) => void
  onChangeText?: (text: string) => void
  onCloseIcon?: (...args: any[]) => void
  onFocus?: (...args: any[]) => void
  placeholder?: string
  style?: StyleProp<any>
  textStyle?: StyleProp<TextStyle>
  value?: string
}

export class Searchfield extends React.Component<SearchfieldProps> {
  render(): React.ReactElement
}

export interface TextFieldFilledProps {
  style?: StyleProp<any>
  containerStyle?: StyleProp<any>
  error?: boolean
  label?: string
  labelColor?: Color
  labelStyle?: StyleProp<any>
  handleFocus?: (...args: any[]) => void
  handleBlur?: (...args: any[]) => void
  focused?: boolean
  helperText?: string
  helperVisible?: boolean
  helperTextStyle?: StyleProp<any>
  underlineColor?: Color
  underlineActiveColor?: Color
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  dense?: boolean
  value?: string
  multiline?: boolean
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  testID?: string
  focusedLabelColor?: string
}

export interface TextFieldFlatProps {
  style?: StyleProp<any>
  containerStyle?: StyleProp<any>
  error?: boolean
  label?: string
  labelColor?: string
  labelStyle?: StyleProp<any>
  handleFocus?: (...args: any[]) => void
  handleBlur?: (...args: any[]) => void
  focused?: boolean
  helperText?: string
  helperVisible?: boolean
  helperTextStyle?: StyleProp<any>
  underlineColor?: string
  underlineActiveColor?: StyleProp<any> | Color
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  dense?: boolean
  value?: string
  multiline?: boolean
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  testID?: string
  focusedLabelColor?: string
}

export interface TextFieldOutlineProps {
  style?: StyleProp<any>
  containerStyle?: StyleProp<any>
  error?: boolean
  label?: string
  labelColor?: string
  labelStyle?: StyleProp<any>
  handleFocus?: (...args: any[]) => void
  handleBlur?: (...args: any[]) => void
  focused?: boolean
  helperText?: string
  helperVisible?: boolean
  helperTextStyle?: StyleProp<any>
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  dense?: boolean
  value?: string
  multiline?: boolean
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  testID?: string
  focusedLabelColor?: Color
}

export interface TextFieldPropsBase {
  type?: 'outlined' | 'filled' | 'flat'
  onFocus?: (...args: any[]) => void
  onBlur?: (...args: any[]) => void
  disabled?: boolean
  placeholder?: string
  onChangeText?: (text: string) => void
}

type TextFieldSpecialProps =
  | TextFieldFilledProps
  | TextFieldOutlineProps
  | TextFieldFlatProps
export type TextFieldProps = TextFieldPropsBase & TextFieldSpecialProps

export class TextField extends React.Component<TextFieldProps> {
  render(): React.ReactElement
}

export interface TextFieldHelperTextProps {
  error?: boolean
  children?: React.ReactNode
  visible?: boolean
  style?: StyleProp<any>
}

export class TextFieldHelperText extends React.Component<TextFieldProps> {
  render(): React.ReactElement
}

export interface ToggleButtonProps {
  style?: StyleProp<any>
  active?: boolean
  onPress?: (e: GestureResponderEvent) => void
  value?: string
  activeNode?: React.ReactNode
  inActiveNode?: React.ReactNode
  rippleColor?: Color
  size?: number
  rippleContainerBorderRadius?: number
  testID?: string
}

export class ToggleButton extends React.Component<ToggleButtonProps> {
  render(): React.ReactElement
}

export interface ToggleButtonGroupProps {
  onPress?: (e: GestureResponderEvent) => void
  children?: React.ReactNode
}

export class ToggleButtonGroup extends React.Component<
  ToggleButtonGroupProps
> {
  render(): React.ReactElement
}

export interface TooltipProps {
  content: string

  children?: React.ReactNode
  style?: StyleProp<any>
  tooltipPosition?: MenuProps['tooltipPosition']
  testID?: string
}

export class Tooltip extends React.Component<TooltipProps> {
  render(): React.ReactElement
}

export interface BaseTextProps {
  style?: StyleProp<any>
  children?: React.ReactNode
  typographyStyles?: StyleProp<TextStyle>
  align?: 'center' | 'left' | 'right'
  color?: Color
  gutterBottom?: boolean
  theme?: Theme
  themeColor?: string
}

export class BaseText extends React.Component<BaseTextProps> {
  render(): React.ReactElement
}

export interface BodyTextProps extends BaseTextProps {
  text?: string
  type?: number
  children?: React.ReactNode
  theme?: Theme
  style?: StyleProp<any>
}

export class BodyText extends React.Component<BodyTextProps> {
  render(): React.ReactElement
}

export interface CaptionProps extends BaseTextProps {
  text?: string
  children?: React.ReactNode
  theme?: Theme
}

export class Caption extends React.Component<CaptionProps> {
  render(): React.ReactElement
}

export interface HeadingProps extends BaseTextProps {
  text?: string
  type?: 1 | 2 | 3 | 4 | 5 | 6
  children?: React.ReactNode
  theme?: Theme
}

export class Heading extends React.Component<HeadingProps> {
  render(): React.ReactElement
}

export interface OverlineProps extends BaseTextProps {
  text?: string
  children?: React.ReactNode
  theme?: Theme
}

export class Overline extends React.Component<OverlineProps> {
  render(): React.ReactElement
}

export interface SubtitleProps extends BaseTextProps {
  text?: string
  type?: number
  children?: React.ReactNode
  theme?: Theme
}

export class Subtitle extends React.Component<SubtitleProps> {
  render(): React.ReactElement
}

export interface AppbarProps {
  color?: Color
  style?: StyleProp<any>
  theme?: Theme
  barType?: 'normal' | 'simple' | 'prominent' | 'dense' | 'prominent dense'
  backgroundImage?: React.ReactNode
  position?: string
  elevation?: number

  navigation?: string | React.ReactNode
  onNavigation?: (...args: any[]) => void

  title?: string
  titleStyles?: StyleProp<any>
  onTitle?: (...args: any[]) => void
  subtitle?: string
  subtitleStyles?: StyleProp<TextStyle>
  textContainerStyles?: StyleProp<TextStyle>

  actionItems?: React.ReactNode

  children?: React.ReactNode
}

export class Appbar extends React.Component<AppbarProps> {
  render(): React.ReactElement
}

export interface AppbarBottomProps {
  color?: Color
  style?: StyleProp<any>
  theme?: Theme

  fab?: React.ReactNode | string
  fabStyles?: StyleProp<any>
  fabPosition?: string
  fabCutout?: boolean

  navigation?: React.ReactNode | string
  onNavigation?: (...args: any[]) => void

  actionItems?: React.ReactNode

  children?: React.ReactNode
  appbarStyles?: StyleProp<any>
}

export class AppbarBottom extends React.Component<AppbarBottomProps> {
  render(): React.ReactElement
}

export interface BackdropProps {
  backLayerConcealed: React.ReactNode
  backLayerRevealed: React.ReactNode

  backLayerStyle?: StyleProp<any>
  frontLayerStyle?: StyleProp<any>
  headerButtonStyle?: StyleProp<any>
  style?: StyleProp<any>
  offset?: number
  initialOffset?: number
  children?: React.ReactNode
  theme?: Theme
  subheader?: string
  testID?: string
}

export class Backdrop extends React.Component<BackdropProps> {
  render(): React.ReactElement
}

export interface BannerProps {
  mobileLayout?: boolean
  style?: StyleProp<any>
  actionItems?: any[]
  singleLine?: boolean
  media?: React.ReactNode
  visible?: boolean

  message?: string
  position?: string
  testID?: string
}

export class Banner extends React.Component<BannerProps> {
  render(): React.ReactElement
}

export interface BottomNavigationProps {
  value: string | number
  actionItems: any[]

  backgroundColor?: Color
  children?: React.ReactNode
  style?: StyleProp<any>
  showLabels?: boolean
  handleChange?: (...args: any[]) => void
  horizontalWhenLandscape?: boolean
  testID?: string
}

export class BottomNavigation extends React.Component<BottomNavigationProps> {
  render(): React.ReactElement
}

export interface BottomNavigationItemProps {
  children?: React.ReactNode
  active?: boolean
  icon?: string
  label?: string
  showLabel?: boolean
  onPress?: (e: GestureResponderEvent) => void
  handleChange?: (...args: any[]) => void
  value?: number | string
  showLabels?: boolean
  style?: StyleProp<any>
  badgeProps?: BadgeProps
  rippleProps?: RippleProps
  testID?: string
  isLandscape?: boolean
  onItemLayout?: (...args: any[]) => void
  maxWidth?: number
  horizontal?: boolean
}

export class BottomNavigationItem extends React.Component<
  BottomNavigationItemProps
> {
  render(): React.ReactElement
}

export interface CardActionsProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  leftActionItems?: any[]
  rightActionItems?: any[]
}

export class CardActions extends React.Component<CardActionsProps> {
  render(): React.ReactElement
}

export interface CardContentProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  rippleProps?: RippleProps
  onPress?: (e: GestureResponderEvent) => void
}

export class CardContent extends React.Component<CardContentProps> {
  render(): React.ReactElement
}

export interface CardHeaderProps {
  children?: React.ReactNode
  thumbnail?: React.ReactNode
  action?: React.ReactNode
  title?: string
  titleStyles?: StyleProp<TextStyle>
  subtitle?: string
  subtitleStyles?: StyleProp<TextStyle>
  style?: StyleProp<any>
}

export class CardHeader extends React.Component<CardHeaderProps> {
  render(): React.ReactElement
}

export interface CardMediaProps {
  children?: React.ReactNode
  image?: React.ReactNode
  style?: StyleProp<any>
  title?: string
  titleStyles?: StyleProp<TextStyle>
  subtitle?: string
  subtitleStyles?: StyleProp<TextStyle>
  height?: number
}

export class CardMedia extends React.Component<CardMediaProps> {
  render(): React.ReactElement
}

export interface CardProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  outlined?: boolean
  shadow?: number
  radius?: number
  onPress?: (e: GestureResponderEvent) => void
  rippleProps?: RippleProps
  testID?: string
}

export class Card extends React.Component<CardProps> {
  render(): React.ReactElement
}

export interface DataTableCellProps {
  text: string

  type?: 'up' | 'header'
  children?: React.ReactNode
  style?: StyleProp<any>
  right?: boolean
  borderRight?: boolean
  borderLeft?: boolean
  minWidth?: number
  onPress?: (e: GestureResponderEvent) => void
  sortingIcon?: string
  relativeWidth?: number
  textStyle?: StyleProp<any>
}

export class DataTableCell extends React.Component<DataTableCellProps> {
  render(): React.ReactElement
}

export interface DataTableHeaderProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  rightActions?: React.ReactNode
  leftActions?: React.ReactNode
  title?: string
}

export class DataTableHeader extends React.Component<DataTableHeaderProps> {
  render(): React.ReactElement
}

export interface DataTablePaginationProps {
  page: number
  numberOfPages: number
  numberOfRows: number
  perPage: number

  children?: React.ReactNode
  style?: StyleProp<any>
  possibleNumberPerPage?: number
  onChangePage?: (page: number) => void
  onChangeRowsPerPage?: (perPage: number) => void
}

export class DataTablePagination extends React.Component<
  DataTablePaginationProps
> {
  render(): React.ReactElement
}

export interface DataTableRowProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  borderBottomColor?: Color
  selected?: boolean
  onPressCheckbox?: (...args: any[]) => void
  showCheckbox?: boolean
  checkboxOffset?: boolean
  onPress?: (e: GestureResponderEvent) => void
  hover?: boolean
  type?: string
}

export class DataTableRow extends React.Component<DataTableRowProps> {
  render(): React.ReactElement
}

export interface DataTableProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  testID?: string
}

export class DataTable extends React.Component<DataTableProps> {
  render(): React.ReactElement
}

export interface DialogProps {
  visible: boolean

  actionItems?: React.ReactNode[]
  style?: StyleProp<any>
  children?: React.ReactNode
  onRequestClose?: (...args: any[]) => void
  onShow?: (...args: any[]) => void
  onTouchOutside?: (...args: any[]) => void
  title?: string
  titleStyle?: StyleProp<any>
  supportingText?: string
  supportingTextStyle?: StyleProp<any>
  contentStyle?: StyleProp<any>
  testID?: string
}

export class Dialog extends React.Component<DialogProps> {
  render(): React.ReactElement
}

export interface DrawerHeaderProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  title?: string
  subtitle?: string
  avatar?: React.ReactNode
}

export class DrawerHeader extends React.Component<DrawerHeaderProps> {
  render(): React.ReactElement
}

export interface DrawerItemProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  text?: string
  icon?: string
  onPress?: (e: GestureResponderEvent) => void
  active?: boolean
}

export class DrawerItem extends React.Component<DrawerItemProps> {
  render(): React.ReactElement
}

export interface DrawerSectionProps {
  children?: React.ReactNode
  style?: StyleProp<any>
  label?: string
  topDivider?: boolean
  bottomDivider?: boolean
  fullWidth?: boolean
}

export class DrawerSection extends React.Component<DrawerSectionProps> {
  render(): React.ReactElement
}

export interface DrawerProps {
  open: boolean
  drawerContent: React.ReactNode
  onClose: (...args: any[]) => void

  type?: 'push' | 'permanent'
  children?: React.ReactNode
  animationTime?: number

  pageHeight?: number
  pageWidth?: number
  widthPercentage?: number
  width?: number
  fullHeight?: boolean
  position?: string

  appbar?: React.ReactNode
  scrim?: boolean
  scrimColor?: string
  scrimOpacity?: number

  style?: StyleProp<any>
  contentContainerStyle?: StyleProp<any>
  drawerStyle?: StyleProp<any>
  scrimStyles?: StyleProp<any>
  testID?: string
}

export class Drawer extends React.Component<DrawerProps> {
  render(): React.ReactElement
}

export interface DrawerBottomProps extends SheetBottomProps {
  children?: React.ReactNode
  style?: StyleProp<any>
}

export class DrawerBottom extends React.Component<DrawerBottomProps> {
  render(): React.ReactElement
}

export interface FabSpeedDialProps {
  fab?: React.ReactNode | string
  actions?: React.ReactNode
  extended?: boolean
  style?: StyleProp<any>
  onPress?: (e: GestureResponderEvent) => void
  testID?: string
}

export class FabSpeedDial extends React.Component<FabSpeedDialProps> {
  render(): React.ReactElement
}

export interface MenuItemProps {
  text?: string
  children?: React.ReactNode
  disabled?: boolean
  onPress?: (e: GestureResponderEvent) => void
  style?: StyleProp<any>
  textStyle?: StyleProp<TextStyle>
  icon?: React.ReactNode
  keyboardCommand?: React.ReactNode
}

export class MenuItem extends React.Component<MenuItemProps> {
  render(): React.ReactElement
}

export interface MenuProps {
  button?: React.ReactNode
  children?: React.ReactNode
  onHidden?: (...args: any[]) => void
  style?: StyleProp<any>
  visible?: boolean
  menuStyle?: StyleProp<any>
  sameWidth?: boolean
  onBackdropPress?: (...args: any[]) => void
  modalMenuStyle?: StyleProp<any>
  contentContainerStyle?: StyleProp<any>
  noBackDrop?: boolean
  tooltip?: boolean
  tooltipPosition?: string
  testID?: string
}

export class Menu extends React.Component<MenuProps> {
  render(): React.ReactElement
}

export interface SearchbarProps {
  value?: string
  style?: StyleProp<any>
  onChangeText?: (text: string) => void
  onCloseIcon?: (...args: any[]) => void
  onNavigation?: (...args: any[]) => void
  placeholder?: string
}

export class Searchbar extends React.Component<SearchbarProps> {
  render(): React.ReactElement
}

export interface SelectProps {
  onSelect?: (...args: any[]) => void
  buttonStyle?: StyleProp<any>
  label?: string
  selectedItem?: React.ReactNode
  menuItems?: any[]
  visible?: boolean
  textFieldProps?: TextFieldProps
  menuProps?: MenuProps
  type?: TextFieldProps['type']
  onBackdropPress?: (e: GestureResponderEvent) => void
  theme?: Theme
  testID?: string
}

export class Select extends React.Component<SelectProps> {
  render(): React.ReactElement
}

export interface SheetBottomProps {
  visible: boolean
  duration?: number
  onBackdropPress?: (...args: any[]) => void
  onSwipeDown?: (...args: any[]) => void
  onSwipeUp?: (...args: any[]) => void
  children?: React.ReactNode
  wrapperStyles?: StyleProp<any>
  style?: StyleProp<any>
  cardVerticalPadding?: number
  pageHeight?: number
  testID?: string
}

export class SheetBottom extends React.Component<SheetBottomProps> {
  render(): React.ReactElement
}

export interface SheetSideProps {
  duration?: number
  onBackdropPress?: (...args: any[]) => void
  onSwipeLeft?: (...args: any[]) => void
  onSwipeRight?: (...args: any[]) => void
  children?: React.ReactNode
  wrapperStyles?: StyleProp<any>
  style?: StyleProp<any>
  visible?: boolean
  pageWidth?: number
  pageHeight?: number
  widthPercentage?: number
  side?: string
  testID?: string
}

export class SheetSide extends React.Component<SheetSideProps> {
  render(): React.ReactElement
}

export interface SnackbarProps {
  visible?: boolean
  animationDuration?: number
  children?: React.ReactNode
  style?: StyleProp<any>
  onButtonPress?: (e: GestureResponderEvent) => void
  buttonLabel?: string
  buttonTextColor?: Color
  testID?: string
}

export class Snackbar extends React.Component<SnackbarProps> {
  render(): React.ReactElement
}

export interface SwipeNavProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  scrollViewProps?: ScrollViewProps
  scrollComponent?: React.ReactNode
  style?: StyleProp<any>
  headerContainerStyle?: StyleProp<any>
  footerContainerStyle?: StyleProp<any>
  scrollViewStyle?: StyleProp<any>
  children?: React.ReactNode
}

export class SwipeNav extends React.Component<SwipeNavProps> {
  render(): React.ReactElement
}

export interface TabsProps {
  actionItems?: string | React.ReactNode
  selectedIndex?: number
  backgroundColor?: string
  underlineColor?: string
  scrollEnabled?: boolean
  handleChange?: (...args: any[]) => void
  style?: StyleProp<any>
  theme?: Theme
  testID?: string
}

export class Tabs extends React.Component<TabsProps> {
  render(): React.ReactElement
}

export interface TabProps {
  label?: string
  active?: boolean
  activeTextColor?: string
  inActiveTextColor?: string
  textStyle?: StyleProp<any>
  iconStyles?: StyleProp<any>
  onPress?: (e: GestureResponderEvent) => void
  tabWidth?: number
  style?: StyleProp<any>
  icon?: string
  rippleProps?: RippleProps
}

export class Tab extends React.Component<TabProps> {
  render(): React.ReactElement
}
