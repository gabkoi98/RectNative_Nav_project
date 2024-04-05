import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// These are the Icon at the button Tab
import { Ionicons } from "@expo/vector-icons";

// Screen
import Feed from "./Screens/tabScreens/Feed";
import Settings from "./Screens/tabScreens/Settings";
import Notifications from "./Screens/tabScreens/Notifications";
import TweetDetailsScreen from "./Screens/homeStack/TweetDetailsScreen";
import Payments from "./Screens/drawerScreens/Payments";

//These are the navigation initialzation
const tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// SO This is the function for the "BOTTOM TAB NAVIGATION"

const TabGroups = () => {
  return (
    <tab.Navigator>
      <tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "@GabKOI",
          tabBarIcon: () => (
            <Ionicons name="home-sharp" size={24} color="black" />
          ),
        }}
      />

      <tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />

      <tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: () => (
            <Ionicons name="notifications" size={24} color="black" />
          ),
        }}
      />
    </tab.Navigator>
  );
};

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TapGroups"
        component={TabGroups}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
};

const DrawerGroups = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

// this is the navigation function
const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <TabGroups /> */}
      {/* <HomeStackGroup /> */}
      <DrawerGroups />
    </NavigationContainer>
  );
};

export default AppNavigation;
