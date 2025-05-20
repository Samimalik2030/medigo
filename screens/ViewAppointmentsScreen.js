import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// change this to 'doctor' or 'patient'
const userRole = 'patient';

const dummyAppointments = [
  {
    id: '1',
    date: '2025-05-21T14:00:00Z',
    status: 'confirmed',
    doctor: { name: 'Dr. Ayesha Ali' },
    patient: { name: 'Ahmed Raza' },
  },
  {
    id: '2',
    date: '2025-05-22T10:30:00Z',
    status: 'pending',
    doctor: { name: 'Dr. Imran Khan' },
    patient: { name: 'Ahmed Raza' },
  },
  {
    id: '3',
    date: '2025-05-25T16:00:00Z',
    status: 'cancelled',
    doctor: { name: 'Dr. Sara Naveed' },
    patient: { name: 'Ahmed Raza' },
  },
];

export default function ViewAppointmentsScreen() {
  const renderItem = ({ item }) => {
    const otherPersonName =
      userRole === 'doctor' ? item.patient.name : item.doctor.name;

    return (
      <View style={styles.card}>
        <Text style={styles.name}>{otherPersonName}</Text>
        <Text style={styles.datetime}>
          {new Date(item.date).toLocaleString()}
        </Text>
        <Text style={[styles.status, styles[item.status]]}>
          Status: {item.status}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>
      <FlatList
        data={dummyAppointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No appointments found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: { fontSize: 18, fontWeight: '600' },
  datetime: { marginTop: 5, fontSize: 14 },
  status: { marginTop: 8, fontSize: 14, fontWeight: '500' },
  confirmed: { color: 'green' },
  pending: { color: 'orange' },
  cancelled: { color: 'red' },
});
