import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Animated, ScrollView, View } from 'react-native';
import Tab from './Tab/Tab';
import Underline from './Underline/Underline';
import withTheme from '../../Theme/withTheme';
import styles from './Tabs.styles';
export const TabsContext = React.createContext();

class Tabs extends Component {
  static propTypes = {
    actionItems: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    selectedIndex: PropTypes.number,
    backgroundColor: PropTypes.string,
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
    let scrollValue = !scrollEnabled ? tabWidth : barWidth * 0.4;
    if (scrollValue < 90) scrollValue = 90;

    if (!scrollEnabled && scrollValue > 90) {
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
      let tabWidth = width / actionItems.length;

      this.setState({
        tabWidth: tabWidth,
      });
    }
    this.setState({
      barWidth: width,
    });
  }

  getColor() {
    const { backgroundColor, theme } = this.props;
    let implementedColor = backgroundColor
      ? backgroundColor
      : theme.primary.main;

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

    let tabWidthImplemented = !scrollEnabled ? tabWidth : barWidth * 0.4;
    if (tabWidthImplemented < 90) tabWidthImplemented = 90;

    return actionItems.map((item, index) => {
      if (!item.props) {
        return (
          <Tab
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => {
              handleChange(index);
              if (item.onPress) item.onPress();
            }}
            active={index === selectedIndex}
            tabWidth={tabWidthImplemented}
          />
        );
      } else {
        return React.cloneElement(item, {
          key: index,
          active: index === selectedIndex,
          tabWidth: tabWidthImplemented,
          onPress: () => {
            handleChange(index);
            if (item.props.onPress) item.onPress();
          },
        });
      }
    });
  }

  _renderContent() {
    const { scrollEnabled, underlineColor } = this.props;
    const { tabWidth, indicatorPosition, barWidth } = this.state;

    let tabWidthImplemented = !scrollEnabled ? tabWidth : barWidth * 0.4;
    if (tabWidthImplemented < 90) tabWidthImplemented = 90;

    return (
      <Fragment>
        <View style={styles.tabsWrapper}>{this._renderTabs()}</View>

        <Underline
          color={underlineColor}
          value={indicatorPosition}
          tabWidth={tabWidthImplemented}
        />
      </Fragment>
    );
  }

  _renderScrollView() {
    const { scrollEnabled } = this.props;
    const { tabWidth, barWidth } = this.state;

    const tabWidthImplemented = !scrollEnabled ? tabWidth : barWidth * 0.4;

    if (scrollEnabled || tabWidthImplemented < 90) {
      return (
        <ScrollView
          horizontal
          ref={ref => {
            this.scrollView = ref;
          }}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps={'never'}
          scrollEnabled={scrollEnabled || tabWidthImplemented < 90}>
          {this._renderContent()}
        </ScrollView>
      );
    } else {
      return this._renderContent();
    }
  }

  render() {
    const { style } = this.props;

    return (
      <TabsContext.Provider>
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
      </TabsContext.Provider>
    );
  }
}

export default withTheme(Tabs);
