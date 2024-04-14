import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/images/pet.PNG')} style={{ width: 50, height: 50}} />
      <Text>Home!</Text>
      <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change Hi in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
    </View>
  );
}

function RemindersScreen() {
  return(
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'items'}}>
      <Image source={require('./assets/images/todo.PNG')} style={{ with: 50, height: 50}} />
    </View>
  )
}

function MapScreen() {
  return (
   <View style={styles.container}>
      <Image source={require('./assets/images/map.PNG')} style={{ with: 50, height: 50}} />
      <MapView style={styles.map} />
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reminders" component={RemindersScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

