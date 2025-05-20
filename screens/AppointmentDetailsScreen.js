import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AppointmentDetailsScreen() {
  const appointment = {
    id: "2",
    date: "2025-05-22T10:30:00Z",
    status: "pending",
    doctor: { name: "Dr. Imran Khan", email: "imran@example.com" },
    patient: { name: "Ahmed Raza", email: "ahmed@example.com" },
    notes: "Discuss test results.",
  };

  const userRole = "admin";

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "green";
      case "pending":
        return "orange";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>

      <View style={styles.card}>
        <Text style={styles.item}>
          <Text style={styles.label}>
            {userRole === "doctor" ? "Patient" : "Doctor"}:{" "}
          </Text>
          {userRole === "doctor"
            ? appointment.patient.name
            : appointment.doctor.name}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Date & Time: </Text>
          {new Date(appointment.date).toLocaleString()}
        </Text>

        <Text style={[styles.item]}>
          <Text style={styles.label}>Status: </Text>
          <Text style={{ color: getStatusColor(appointment.status), fontWeight: "bold" }}>
            {appointment.status.toUpperCase()}
          </Text>
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Notes: </Text>
          {appointment.notes || "N/A"}
        </Text>

        <Text style={styles.item}>
          <Text style={styles.label}>Email: </Text>
          {userRole === "doctor"
            ? appointment.patient.email
            : appointment.doctor.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
  },
  label: {
    fontWeight: "600",
    color: "#555",
  },
});
