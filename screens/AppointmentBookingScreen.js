import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const AppointmentBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '3:00 PM', '3:30 PM', '4:00 PM',
  ];

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select a date and time.');
      return;
    }

    Alert.alert('Success', `Appointment booked for ${selectedDate} at ${selectedTime}`);
    // You can now send this data to your backend/server
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Appointment</Text>

    

      <Text style={styles.label}>Available Time Slots</Text>

      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item}
        numColumns={3}
        columnWrapperStyle={styles.timeRow}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeSlot,
              item === selectedTime && styles.selectedTime,
            ]}
            onPress={() => setSelectedTime(item)}
          >
            <Text style={item === selectedTime ? styles.selectedText : styles.timeText}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.bookButton} onPress={bookAppointment}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  calendar: { marginBottom: 20, borderRadius: 10 },
  label: { fontSize: 18, fontWeight: '500', marginBottom: 10 },
  timeRow: { justifyContent: 'space-between', marginBottom: 10 },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  selectedTime: {
    backgroundColor: '#007bff',
  },
  timeText: {
    color: '#007bff',
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '500',
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppointmentBookingScreen;
