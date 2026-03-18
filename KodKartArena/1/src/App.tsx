import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MotiView } from "moti";
import { colors } from "./constants/theme";

// Screens (Placeholder for now, we will migrate them)
import { HomeScreen } from "./screens/HomeScreen";
import { DevCardScreen } from "./screens/DevCardScreen";
import { CreateCardScreen } from "./screens/CreateCardScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";
import { AchievementsScreen } from "./screens/AchievementsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: `${colors.surface}`,
          borderTopColor: colors.border,
          height: 60 + (Platform.OS === 'ios' ? 20 : 0),
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
      })}
    >
      <Tab.Screen 
        name="Feed" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🃏</Text> }}
      />
      <Tab.Screen 
        name="Board" 
        component={LeaderboardScreen} 
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🏆</Text> }}
      />
      <Tab.Screen 
        name="Goals" 
        component={AchievementsScreen} 
        options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🎯</Text> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="DevDetail" component={DevCardScreen} />
          <Stack.Screen name="Create" component={CreateCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
