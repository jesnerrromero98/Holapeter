import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WebviewScreen from './WebviewScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SupportScreen from './SupportScreen';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from'./SettingsScreen';

const WebStack= createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();
const SettingsStack=createStackNavigator();
const ExploreStack=createStackNavigator();
const SupportStack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergencia"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'N* emergencia',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-call" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Lugares Seguro"
        component={ProfilesStackScreen}
        options={{
          tabBarLabel: 'Lugares Seguro',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Servicios Sociales"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Servicio Social',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-people" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#AB2F74',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'HATI-HATI',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#AB2F74" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <WebStack.Screen name="Denuncia" component={WebviewScreen} options={{
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
       
       <ProfilesStack.Screen name="Lugares Seguro" component={ProfileScreen} options={{
         /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
        }} />
        <DetailsStack.Screen name="Numero de Emergencia" component={DetailsScreen} options={{
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />

</HomeStack.Navigator>
);
const ProfilesStackScreen = ({navigation}) => (
  <ProfilesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#AB2F74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfilesStack.Screen name="Lugares Seguro" component={ProfileScreen} options={{
         /* headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )*/
          }} />
  </ProfilesStack.Navigator>
  );
    

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#AB2F74',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Numeros de Emergencia" component={DetailsScreen} options={{
       /* headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
        }} />
</DetailsStack.Navigator>
);
const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#AB2F74',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ExploreStack.Screen name="Servicios Sociales" component={ExploreScreen} options={{
         /* headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )*/
          }} />

          
        <SupportStack.Screen name="Reservar Cita" component={SupportScreen} options={{
          /*headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
          }} />
  </ExploreStack.Navigator>

);
