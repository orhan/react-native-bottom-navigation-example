/**
* 'Destinations' screen for 'Bottom-Navigation' sample app.
*/
'use strict';

/* --- Imports --- */

import React, {
  Component,
  PropTypes
} from 'react';

const ReactNative = require('react-native');
const {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} = ReactNative;


/* --- Class methods --- */

class Destinations extends Component {
  onTabSelected() {
    this.refs.scrollView.scrollTo({x: 0, y: -25, animated: false});
    this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true});
  }

  onScrollToTop() {
    this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true});
  }

  render() {
    return (
      <ScrollView ref="scrollView" style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.box}>
          <Image
            style={styles.drawer}
            source={require('./icons/ic_drawer.png')}
            />

          <Text style={styles.search}>
            Search
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('./images/img_australia.jpg')}
              resizeMode="cover"
              />

            <Text style={styles.title}>
              Australia
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('./images/img_cartagena.jpg')}
              resizeMode="cover"
              />

            <Text style={styles.title}>
              Cartagena, Colombia
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('./images/img_scotland.jpg')}
              resizeMode="cover"
              />

            <Text style={styles.title}>
              Scotland
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('./images/img_mykonos.jpg')}
              resizeMode="cover"
              />

            <Text style={styles.title}>
              Mykonos, Greece
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}


/* --- Stylesheet --- */

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 16,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    backgroundColor: '#FFFFFF',
  },

  box: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 14,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    backgroundColor: '#FFFFFF',
  },

  drawer: {
    marginRight: 16,
    marginTop: 5,
    tintColor: '#808080'
  },

  image: {
    width: null,
    height: 200,
    overflow: 'hidden',
    borderRadius: 2,
  },

  search: {
    fontSize: 18,
    color: '#999999'
  },

  title: {
    height: 52,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B'
  },

  description: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 14,
    fontSize: 13,
  },

  readmore: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#003879'
  },
});


/* --- Module exports --- */

module.exports = Destinations;
