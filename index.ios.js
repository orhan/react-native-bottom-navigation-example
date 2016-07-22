/**
 * 'Bottom-Navigation' sample app.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';

const BottomNavigation = require('react-native-bottom-navigation');
const Destinations = require('./Destinations');
const Flights = require('./Flights');
const Favorites = require('./Favorites');

class RNSandbox extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('default', false);
  }

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.navbar}>
          <Text style={styles.title}>Travel Guide</Text>
        </View>
        <BottomNavigation
          style={styles.container}
          tabBarColor="#FFF"
          activeColor="rgb(0, 100, 125)"
          inactiveColor="#757575"
          maskColor="rgba(0, 100, 125, 0.02)"
          rippleColor="rgba(0, 100, 125, 0.06)"
          onChangeTab={(tab, index) => {
            if (tab.ref.props.tabLabel == 'Destinations') {
              this.refs.destinations.onTabSelected();
            } else if (tab.ref.props.tabLabel == 'Flights') {
              this.refs.flights.onTabSelected();
            }
          }}
          onScrollToTop={(tab, index) => {
            if (tab.ref.props.tabLabel == 'Destinations') {
              this.refs.destinations.onScrollToTop();
            } else if (tab.ref.props.tabLabel == 'Flights') {
              this.refs.flights.onScrollToTop();
            }
          }}
          >
          <Destinations
            ref="destinations"
            style={styles.container}
            tabLabel="Destinations"
            tabIcon={require('./icons/ic_destinations.png')}
            />

          <Flights
            ref="flights"
            style={styles.container}
            tabLabel="Flights"
            tabIcon={require('./icons/ic_schedule.png')}
            />

          <Favorites
            ref="favorites"
            style={styles.container}
            tabLabel="Favorites"
            tabIcon={require('./icons/ic_favorites.png')}
            />

          <View
            style={styles.container}
            tabLabel="Settings"
            tabIcon={require('./icons/ic_profile.png')}
            >
            <Text style={styles.welcome}>
              Settings
            </Text>
          </View>
        </BottomNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },

  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },

  title: {
    top: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(0, 85, 115)',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNSandbox', () => RNSandbox);
