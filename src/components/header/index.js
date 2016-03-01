'use strict';
import React, {
  StyleSheet,
  Component,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');

class Header extends Component {
    constructor(props) {
      super(props); 
      this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle(e) {
      this.props.onMenuToggle();
    }

    render() {

      return (
          <View style={styles.header}>
            <TouchableHighlight onPress={this.handleMenuToggle}>
              <Icon name="navicon" size={24} color="white" />
            </TouchableHighlight>
            <Text style={styles.headerTitle}>CrowdTrade</Text>
            <Icon name="cog" size={24} color="white" />
          </View>
      );
    }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'black',
      flexDirection: 'row',
      padding: 10,
    },
    headerTitle: {
      flex: 1,
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '700',
    },
  });

module.exports = Header