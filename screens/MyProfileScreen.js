import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const MyProfileScreen = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 123 456 7890',
    location: 'New York, USA',
    image: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Phone</Text>
        <Text style={styles.infoText}>{user.phone}</Text>

        <Text style={styles.infoLabel}>Location</Text>
        <Text style={styles.infoText}>{user.location}</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  infoBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 30,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MyProfileScreen;
