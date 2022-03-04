import React from "react";
import { createStackNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            hearderShown: false
        }}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;