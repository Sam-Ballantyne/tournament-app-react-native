import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import CurrentTournamentsScroll from '../components/CurrentTournamentsScroll';
import { withNavigation } from 'react-navigation'

class ExistingTournaments extends React.Component {
  static navigationOptions = {
    title: 'Existing Tournaments',
    headerStyle: {
      backgroundColor: '#002E2C'
    },
    headerTintColor: '#bebece',
    headerTitleStyle: {
      color: '#bebece',
    }
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <CurrentTournamentsScroll />
      </View>
    );
  }
}

export default withNavigation(ExistingTournaments);
