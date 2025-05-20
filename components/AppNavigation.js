import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DoctorListsScreen from "../screens/DoctorListsScreen";
import DoctorDetailsScreen from "../screens/DoctorDetailsScreen";
import AppointmentBookingScreen from "../screens/AppointmentBookingScreen";
import ViewAppointmentsScreen from "../screens/ViewAppointmentsScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import AppointmentDetailsScreen from "../screens/AppointmentDetailsScreen";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Doctor Lists"
        component={DoctorListsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-hospital" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DoctorDetails"
        component={DoctorDetailsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Appointment Booking"
        component={AppointmentDetailsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Appointments"
        component={ViewAppointmentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
