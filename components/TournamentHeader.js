import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class TournamentHeader extends React.Component {
    render() {
        this.completed = 'Completed';
        if (this.props.completed === 0) {
            this.completed = 'Ongoing';
        }
        return (
            <View style={homeStyle.container}>
                <Text style={homeStyle.headerText}>{this.props.name}</Text>
                <Text style={homeStyle.infoText}>Weight: {this.props.weight}</Text>
                <Text style={homeStyle.infoText}>Size: {this.props.size}</Text>
                <Text style={homeStyle.infoText}>Winner: {this.props.winner}</Text>
            </View>
        );
    }
}
