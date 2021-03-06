import React, { StyleSheet, Text, View, Animated, Component, PanResponder, Image, TouchableHighlight} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');
var IconIonicons = require('react-native-vector-icons/Ionicons');
import CardDropDown from './cardDropDown'

let staticContainer = 'https://s3-eu-west-1.amazonaws.com/crowdtrade-stock-logos/v2/';

class StockStatLineItem extends Component {
  render() {
    stockStats = this.props.stats.map((item, index) => (
      <View key={index} style={styles.cardStockStatContainer}>
        <Text style={styles.cardStockStatLabel}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.cardStockStat}>
          {item.value}
        </Text>
      </View>
    ));

    return (
      <View style={styles.cardStockStatsContainer}>
        {stockStats}
      </View>
    );
  }
}

class StockDetails extends Component {
  render() {
    let stockTextColor = this.props.hasIncreased ? styles.greenText : styles.redText;
    let stockDiffIcon = this.props.hasIncreased ? 'arrow-up-a' : 'arrow-down-a';

    return (
      <View style={[styles.cardStockDetailsContainer]}>
        <StockStatLineItem stats={[
          {name: "52W Low", value: this.props.yearLow},
          {},
          {name: "52W High", value: this.props.yearHigh}]}/>
        <StockStatLineItem stats={[
          {name: "VOL", value: this.props.volume},
          {},
          {name: "AVG VOL", value: this.props.averageDailyVolume}]}/>
        <StockStatLineItem stats={[
          {name: "P/E", value: this.props.pe},
          {},
          {name: "EPS", value: this.props.eps}]}/>
        <StockStatLineItem stats={[
          {name: "YIELD", value: this.props.yield },
          {},
          {name: "MKT CAP", value: this.props.marketCapitalization}]}/>
        <StockStatLineItem stats={[
          {name: "LOW", value: this.props.low}, 
          {name: "AVG", value: this.props.ave}, 
          {name: "HIGH", value: this.props.high}]}/>
        <View style={styles.cardStockDiffContainer}>
          <IconIonicons name={stockDiffIcon} style={[styles.cardStockDiffImage, stockTextColor]} />
          <View style={styles.cardStockDiffTextContainer}>
            <Text style={[styles.cardStockDiffLabel, stockTextColor]}>
              KO
            </Text>
            <Text style={[styles.cardStockDiff, stockTextColor]}>
              {this.props.current}
            </Text>
            <Text style={[styles.cardStockPercentageChange, stockTextColor]}>
              {this.props.percentageChange}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class CardImage extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.cardImage} onPress={this.props.onToggleIsDropDownDisplayed}>
        <Image source={{uri: staticContainer + this.props.image}} style={styles.cardImage} resizeMode={Image.resizeMode.cover}>
          <Animated.View style={[styles.cardImageTextContainer, styles.cardImageYupContainer, this.props.animatedYupStyles]}>
            <Icon name='check' style={[styles.cardImageText, styles.greenText]}/>
          </Animated.View>
          <Animated.View style={[styles.cardImageTextContainer, styles.cardImageNopeContainer, this.props.animatedNopeStyles]}>
            <Icon name='close' style={[styles.cardImageText, styles.redText]}/>
          </Animated.View>
          <Text style={styles.cardImageName}>
            {this.props.name}
          </Text>
        </Image>
      </TouchableHighlight>
    );
  }
}

export default class Card extends Component {
  render() {

    return (
        <View style={styles.card}>
          <CardDropDown {...this.props} onToggleIsDropDownDisplayed={this.props.onToggleIsDropDownDisplayed} news={this.props.news}/>
          <StockDetails {...this.props}/>
        </View>
    );
  }
}

var styles = StyleSheet.create({

  // text styles for page
  greenText: {
    color: '#00a060',
  },
  redText: {
    color: '#b5173a',
  },

  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 0,
    }
  },

  cardImage: {
    flex: 1,
    //height: 100,
    backgroundColor: 'white',
  },

  cardImageTextContainer: {
    position: 'absolute',
    opacity: 0,
  },
  cardImageText: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  cardImageName: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(30,30,30,0.8)',
    padding: 4,
    paddingLeft: 8,
  },
  cardStockDetailsContainer: {
    backgroundColor: '#FFF',
    //height: 80,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
    //overflow: 'hidden',
  },
  cardStockStatsContainer: {
    flexDirection: 'row',
    height: 44,
    //flex: 2,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStockStatContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStockStatLabel: {
    width: 60,
    fontSize: 12,
    marginRight: 4,
    color: '#666',
    fontWeight: '500',
    textAlign: 'right',
  },
  cardStockStat: {
    width: 50,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  cardStockDiffContainer: {
    flexDirection: 'row',
    //flex: 3,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStockDiffImage: {
    marginRight: 2,
  },
  cardStockDiffTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    //height: 14,
  },
  cardStockDiffImage: {
    fontSize: 40,
    marginRight: 8,
  },
  cardStockDiffLabel: {
    fontSize: 12,
    marginRight: 2,
    paddingBottom: 2,
  },
  cardStockDiff: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
  cardStockPercentageChange: {
    fontSize: 12,
    alignSelf: 'flex-start',
  },
});