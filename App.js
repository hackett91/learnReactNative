import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventList  from './EventList';
import EventForm  from './EventForm';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          key="eventlist"
          name="EventList"
          component={EventList}
          options={{ title: 'Your Events' }}
        />
        <Stack.Screen
          key="form"
          name="EventForm"
          component={EventForm}
          options={{ title: 'Add an event' }}
          >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;