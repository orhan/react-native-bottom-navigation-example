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
            Search for flights
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_seychelles.jpg')}
            resizeMode="cover"
            />

          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.title}>
              Seychelles
            </Text>
            <Text style={styles.price}>
              Starting from $1499
            </Text>
            <Text style={styles.description}>
              06/08/2016 – 06/15/2016{'\n'}
              Flights, 5 Star Hotel, All inclusive.
            </Text>
            <Text style={styles.booknow}>
              BOOK NOW
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_sri_lanka.jpg')}
            resizeMode="cover"
            />

          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.title}>
              Sri Lanka
            </Text>
            <Text style={styles.price}>
              Starting from $899
            </Text>
            <Text style={styles.description}>
              06/14/2016 – 06/20/2016{'\n'}
              Flights, 5 Star Hotel, All inclusive.
            </Text>
            <Text style={styles.booknow}>
              BOOK NOW
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_new_plymouth.jpg')}
            resizeMode="cover"
            />

          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.title}>
              New Zealand
            </Text>
            <Text style={styles.price}>
              Starting from $1099
            </Text>
            <Text style={styles.description}>
              06/20/2016 – 06/24/2016{'\n'}
              Flights, 5 Star Hotel, All inclusive.
            </Text>
            <Text style={styles.booknow}>
              BOOK NOW
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_cartagena.jpg')}
            resizeMode="cover"
            />

          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.title}>
              Cartagena, Colombia
            </Text>
            <Text style={styles.price}>
              Starting from $499
            </Text>
            <Text style={styles.description}>
              06/22/2016 – 06/25/2016{'\n'}
              Flights, 5 Star Hotel, All inclusive.
            </Text>
            <Text style={styles.booknow}>
              BOOK NOW
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_mykonos.jpg')}
            resizeMode="cover"
            />

          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text style={styles.title}>
              Mykonos
            </Text>
            <Text style={styles.price}>
              Starting from $1299
            </Text>
            <Text style={styles.description}>
              07/01/2016 – 07/14/2016{'\n'}
              Flights, 5 Star Hotel, All inclusive.
            </Text>
            <Text style={styles.booknow}>
              BOOK NOW
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
    flexDirection: 'row',
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
    width: 100,
    height: 150,
    overflow: 'hidden',
    borderRadius: 2,
  },

  search: {
    fontSize: 18,
    color: '#999999'
  },

  title: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B'
  },

  price: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#404040'
  },

  description: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 14,
    lineHeight: 18,
    fontSize: 13,
    color: '#999999'
  },

  booknow: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 2,
    marginBottom: 16,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#003879'
  },
});


/* --- Module exports --- */

module.exports = Destinations;
