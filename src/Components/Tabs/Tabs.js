import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, ScrollView, View } from 'react-native';
import Tab from './Tab/Tab';
import Underline from './Underline/Underline';
import withTheme from '../../Theme/withTheme';
import styles from './Tabs.styles';

class Tabs extends Component {
  static propTypes = {
    actionItems: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    selectedIndex: PropTypes.number,
    color: PropTypes.string,
    underlineColor: PropTypes.string,
    scrollEnabled: PropTypes.bool,
    handleChange: PropTypes.func,
    style: PropTypes.object,
    theme: PropTypes.object,
  };

  static defaultProps = {
    selectedIndex: 0,
    underlineColor: '#fff',
    scrollEnabled: false,
  };

  state = {
    tabWidth: 0,
    barWidth: 0,
    indicatorPosition: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    const { actionItems } = this.props;

    if (actionItems.length !== prevProps.actionItems.length && this.container) {
      this.container.measure((_, b, width) => {
        this.getTabWidth(width);
      });
    }

    this.selectTab();
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.selectedIndex < nextProps.actionItems.length &&
      nextProps.selectedIndex >= 0
    );
  }

  getAnimateValues() {
    const { selectedIndex, scrollEnabled, actionItems } = this.props;
    const { tabWidth, barWidth } = this.state;

    const index = selectedIndex;
    const scrollValue = !scrollEnabled ? tabWidth : barWidth * 0.4;

    if (!scrollEnabled) {
      return {
        indicatorPosition: index === 0 ? 0 : index * scrollValue,
        scrollPosition: 0,
      };
    }

    switch (index) {
      case 0: // First tab
        return {
          indicatorPosition: 0,
          scrollPosition: 0,
        };
      case 1: // Second tab
        return {
          indicatorPosition: barWidth * 0.5 - scrollValue / 4,
          scrollPosition: scrollValue * 0.25,
        };
      case actionItems.length - 1: // Last tab
        return {
          indicatorPosition:
            scrollValue * (index - 1) + (barWidth * 0.5 - scrollValue / 4),
          scrollPosition: scrollValue * (index - 2) + scrollValue * 0.5,
        };
      default:
        // Any tabs between second and last
        return {
          indicatorPosition:
            scrollValue * (index - 1) + (barWidth * 0.5 - scrollValue / 4),
          scrollPosition: scrollValue * 0.25 + scrollValue * (index - 1),
        };
    }
  }

  selectTab() {
    Animated.spring(this.state.indicatorPosition, {
      toValue: this.getAnimateValues().indicatorPosition,
      tension: 300,
      friction: 20,
      useNativeDriver: true,
    }).start();

    if (this.scrollView) {
      this.scrollView.scrollTo({
        x: this.getAnimateValues().scrollPosition,
      });
    }
  }

  getTabWidth(width) {
    const { scrollEnabled, actionItems } = this.props;

    if (!scrollEnabled) {
      this.setState({ tabWidth: width / actionItems.length });
    }
    this.setState({
      barWidth: width,
    });
  }

  getColor() {
    const { color, theme } = this.props;
    let implementedColor = color ? color : theme.primary.main;

    return implementedColor;
  }

  _renderTabs() {
    const {
      scrollEnabled,
      actionItems,
      handleChange,
      selectedIndex,
    } = this.props;
    const { tabWidth, barWidth } = this.state;

    return actionItems.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <Tab
            key={index}
            content={item}
            onPress={() => handleChange(index)}
            active={index === selectedIndex}
            tabWidth={!scrollEnabled ? tabWidth : barWidth * 0.4}
          />
        );
      } else {
        return React.cloneElement(item, {
          key: index,
          active: index === selectedIndex,
        });
      }
    });
  }

  _renderScrollView() {
    const { scrollEnabled, underlineColor } = this.props;
    const { tabWidth, indicatorPosition, barWidth } = this.state;

    return (
      <ScrollView
        horizontal
        ref={ref => {
          this.scrollView = ref;
        }}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'never'}
        scrollEnabled={scrollEnabled}>
        <View style={styles.tabsWrapper}>{this._renderTabs()}</View>

        <Underline
          color={underlineColor}
          value={indicatorPosition}
          tabWidth={!scrollEnabled ? tabWidth : barWidth * 0.4}
        />
      </ScrollView>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: this.getColor(),
          },
          style,
        ]}
        ref={ref => {
          this.container = ref;
        }}
        onLayout={event => this.getTabWidth(event.nativeEvent.layout.width)}>
        {this._renderScrollView()}
      </View>
    );
  }
}

export default withTheme(Tabs);
