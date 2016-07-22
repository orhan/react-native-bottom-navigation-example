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

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_seychelles.jpg')}
            resizeMode="cover"
            />

          <Text style={styles.title}>
            Seychelles
          </Text>
          <Text style={styles.description}>
            Spread across 175 square miles of the Indian Ocean, this chain of 115 islands has become (slightly) more accessible with the introduction of Crystal Cruises’ first small-capacity yacht, Crystal Esprit.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_scotland.jpg')}
            resizeMode="cover"
            />

          <Text style={styles.title}>
            Scotland
          </Text>
          <Text style={styles.description}>
            The launch of Scotland’s North Coast 500 loop has opened up the country’s Highlands and northernmost shores in a new and much more accessible way. Intrepid travelers can now explore its rural and rugged landscapes by car, bicycle or even on foot.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
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
          <Text style={styles.description}>
            Cartagena, on the Caribbean coast, boasts colorful colonial architecture and fantastic food, but its vibrant arts scene is often overlooked. This January brings the 10th incarnation of the Classical Music Festival, followed by the Southern Hemisphere edition of the U.K.’s literary Hay Festival.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_australia.jpg')}
            resizeMode="cover"
            />

          <Text style={styles.title}>
            Australia
          </Text>
          <Text style={styles.description}>
            Now’s your chance to delve deeply into indigenous customs across the continent — beyond the Red Centre and Outback — through projects and companies owned by the aboriginal tribes.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
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
          <Text style={styles.description}>
            While the uncertainties of Greece’s economy and the ongoing migrant crisis might have dampened the desire of some travelers to plan an Aegean holiday, the party never stopped on Mykonos.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_new_plymouth.jpg')}
            resizeMode="cover"
            />

          <Text style={styles.title}>
            New Plymouth, New Zealand
          </Text>
          <Text style={styles.description}>
            This port city on the west coast of the North Island offers an intriguing mix of culture, architecture and contemporary art, including the Len Lye Museum, named for and devoted to one of NZ’s most famous artists.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require('./images/img_sri_lanka.jpg')}
            resizeMode="cover"
            />

          <Text style={styles.title}>
            Sri Lanka
          </Text>
          <Text style={styles.description}>
            Sri Lanka is becoming an easier place to navigate: Enhanced infrastructure has increased connectivity between the capital of Colombo, the old town ofGalle, a UNESCO World Heritage site, and Yale National Park in the south — plus the recently revived Queen of Jaffna train also links Colombo to the north.
          </Text>
          <Text style={styles.readmore}>
            READ MORE
          </Text>
        </View>
      </ScrollView>
    )
  }
}


/* --- Stylesheet --- */

const styles = StyleSheet.create({
  card: {
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
