import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddScreen from '../screens/AddScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import PhotoDetailScreen from '../screens/PhotoDetailScreen'
import SignUpScreen from '../screens/SignUpScreen'
import EditScreen from '../screens/EditScreen';

import { connect } from 'react-redux'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen 
                name="Feed"
                component={HomeScreen}
            />
            <Tab.Screen 
                name="Photo"
                component={PhotoDetailScreen}
            />
        </Stack.Navigator>
    )
}

const Account = () => {
    return(
        <Stack.Navigator
            initialRouteName="Account"
        >
            <Stack.Screen   
                name="Account"
                component={MyAccountScreen}
            />
            <Stack.Screen   
                name="Photo"
                component={PhotoDetailScreen}
            />
            <Stack.Screen   
                name="Edit"
                component={EditScreen}
            />
        </Stack.Navigator>
    )
}

const MainFlow = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen 
                name="Add"
                component={AddScreen}
            />
            <Tab.Screen
                name="Account"
                component={Account}
            />
        </Tab.Navigator>
    )
}

const Navigator = ({ isSigned }) => {
    return(
        <NavigationContainer>
            { isSigned ?
            <MainFlow />
            :
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Fakestagram"}}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                />
            </Stack.Navigator>
            }
            
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => {
    return { isSigned: state.auth.isSigned }
}

export default connect(mapStateToProps, {})(Navigator)