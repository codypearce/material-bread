var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _FrontLayer=_interopRequireDefault(require("./FrontLayer.styles"));var _FrontLayerScrim=_interopRequireDefault(require("../FrontLayerScrim/FrontLayerScrim"));var _=require("../../..");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Backdrop/FrontLayer/FrontLayer.js";var IOS=_reactNative.Platform.OS==='ios';var FrontLayer=function(_PureComponent){(0,_inherits2.default)(FrontLayer,_PureComponent);function FrontLayer(props){var _this;(0,_classCallCheck2.default)(this,FrontLayer);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(FrontLayer).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getFrontLayerTranslateY",function(){var _this$props=_this.props,animate=_this$props.animate,initialOffset=_this$props.initialOffset;var offset=_this.getOffset();return animate.interpolate({inputRange:[0,1],outputRange:[initialOffset,offset]});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getOffset",function(){var ignoreElement=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var _this$props2=_this.props,backLayerRevealed=_this$props2.backLayerRevealed,offset=_this$props2.offset,window=_this$props2.window;if(!ignoreElement&&backLayerRevealed&&offset){return offset;}if(offset)return offset;var y=_this.getY();return window.height-y;});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getY",function(){var initialOffset=_this.props.initialOffset;var y=IOS?20:24;return y+initialOffset;});return _this;}(0,_createClass2.default)(FrontLayer,[{key:"render",value:function render(){var _this$props3=this.props,children=_this$props3.children,_toggleLayout=_this$props3.toggleLayout,animate=_this$props3.animate,frontLayerStyle=_this$props3.frontLayerStyle,backRevealed=_this$props3.backRevealed,subheader=_this$props3.subheader;var translateY=this.getFrontLayerTranslateY();return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_FrontLayer.default.frontLayerContainer,frontLayerStyle,{transform:[{translateY:translateY}]}],__source:{fileName:_jsxFileName,lineNumber:74}},_react.default.createElement(_.Subtitle,{text:subheader,style:_FrontLayer.default.subheader,__source:{fileName:_jsxFileName,lineNumber:81}}),children,_react.default.createElement(_FrontLayerScrim.default,{toggleLayout:function toggleLayout(){return _toggleLayout();},animate:animate,backRevealed:backRevealed,__source:{fileName:_jsxFileName,lineNumber:83}}));}}]);return FrontLayer;}(_react.PureComponent);(0,_defineProperty2.default)(FrontLayer,"propTypes",{offset:_propTypes.default.number,initialOffset:_propTypes.default.number,children:_propTypes.default.node,backLayerRevealed:_propTypes.default.object,frontLayerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,toggleLayout:_propTypes.default.func,animate:_propTypes.default.object,backRevealed:_propTypes.default.bool,isInternalAnimate:_propTypes.default.bool,internalOffsetAnimate:_propTypes.default.object,window:_propTypes.default.object,subheader:_propTypes.default.string});var _default=(0,_withTheme.default)(FrontLayer);exports.default=_default;