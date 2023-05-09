import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

const Help = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>What is appname?</Text>
            <Text style={styles.faqAnswer}>
              appname is a studentcommunity mobile application for cairo-uni
              facalty of science to communicate and help each others
            </Text>
          </View>
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How do I post ?</Text>
            <Text style={styles.faqAnswer}>
              go to your profile and click on add post button then you fill
              wanted files if you want to add img you and then press "post"
              button
            </Text>
          </View>
        </View>
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={styles.emailContainer}>
            <Text style={styles.emailLabel}>
              Enter Questions or your problems:
            </Text>
            <TextInput
              style={styles.QInput}
              placeholder="how do I ....? can I ...?"
              placeholderTextColor="#AEAEAE"
              autoCapitalize="none"
            />
            <Text style={styles.emailLabel}>Enter your email address:</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="example@example.com"
              placeholderTextColor="#AEAEAE"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#33363F",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  faqSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emailContainer: {
    backgroundColor: "#696969",
    borderRadius: 5,
    padding: 10,
  },
  emailLabel: {
    color: "#33363F",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emailInput: {
    backgroundColor: "#33363F",
    color: "#FFFFFF",
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
  },
  QInput: {
    backgroundColor: "#33363F",
    color: "#FFFFFF",
    fontSize: 16,
    height: 200,
    padding: 10,
    borderRadius: 5,
  },
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  faqAnswer: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Help;
