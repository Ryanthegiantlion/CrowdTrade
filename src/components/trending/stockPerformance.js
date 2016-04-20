import React, { StyleSheet, Text, View, Animated, Component, TouchableHighlight, Image} from 'react-native';

import Dimensions from 'Dimensions';

var IconIonicons = require('react-native-vector-icons/Ionicons');

var graphImages = {
  image1d: require('../../store/data/trending/stock_graph/1d.png'),
  image1w: require('../../store/data/trending/stock_graph/1w.png'),
  image1m: require('../../store/data/trending/stock_graph/1m.png'),
  //image3m: require('../../store/data/trending/stock_graph/3m.jpeg'),
  image6m: require('../../store/data/trending/stock_graph/6m.png'),
  image1y: require('../../store/data/trending/stock_graph/1y.png'),
  //image2y: require('../../store/data/trending/stock_graph/2y.jpeg'),
}

export default class TimeSpanSelector extends Component {
  render() {
    let active = undefined
    if (this.props.isActive)
    {
      active = styles.active
    }
    return (
      <TouchableHighlight 
        style={styles.timeSpan} 
        onPress={() => this.props.onTimeSpanPress(this.props.timeSpan)}>
        <View style={[styles.timeSpanContainer, active]}>
          <Text style={styles.timeSpanText}>{this.props.timeSpanLabel}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default class StockPerformance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTimeSpan: '1d'
    }
  }

  onTimeSpanPress(timeSpan) {
    this.setState({currentTimeSpan: timeSpan})
  }

  render() {
    let screenwidth = Dimensions.get('window').width;
    return (
      <View style={[styles.stockPerformanceContainer, {width: screenwidth}]}>
      	<View style={styles.timeSpansContainer}>
          <TimeSpanSelector onTimeSpanPress={this.onTimeSpanPress.bind(this)} timeSpan='1d' timeSpanLabel='1d' isActive={this.state.currentTimeSpan == '1d'}/>
          <TimeSpanSelector onTimeSpanPress={this.onTimeSpanPress.bind(this)} timeSpan='1w' timeSpanLabel='1w' isActive={this.state.currentTimeSpan == '1w'}/>
          <TimeSpanSelector onTimeSpanPress={this.onTimeSpanPress.bind(this)} timeSpan='1m' timeSpanLabel='1m' isActive={this.state.currentTimeSpan == '1m'}/>
          <TimeSpanSelector onTimeSpanPress={this.onTimeSpanPress.bind(this)} timeSpan='6m' timeSpanLabel='6M' isActive={this.state.currentTimeSpan == '6m'}/>
          <TimeSpanSelector onTimeSpanPress={this.onTimeSpanPress.bind(this)} timeSpan='1y' timeSpanLabel='1Y' isActive={this.state.currentTimeSpan == '1y'}/>
      	</View>
        <Image source={graphImages["image" + this.state.currentTimeSpan]} style={[styles.graph, {width: screenwidth}]} resizeMode={Image.resizeMode.contain}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({

  stockPerformanceContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom: 14,
  },
  timeSpansContainer: {
  	flexDirection: 'row',
    
    alignItems: 'center',
  },
  timeSpanContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },
  timeSpan: {
    flex: 1,
    alignItems: 'center',
    //marginTop: 8,
    //marginBottom: 8,
  },
  timeSpanText: {
    color: 'white',
    //mari
  },
  active: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  graph: {
    flex: 1,
    padding: 20,
    transform: [{scale: 0.95}],
  },
});