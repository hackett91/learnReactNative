
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

class EventList extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = require('./db.json').events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('EventForm');
  }


  render() {
    return [
      <FlatList
        key="flatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <EventCard
            event={item}
          />
        )}
      />,
      <ActionButton 
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231,76,60, 1)"
      />
    
    ];
  }
}

export default EventList;