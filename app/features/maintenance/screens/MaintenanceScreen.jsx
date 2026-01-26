import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { Colors } from '../../../../constants/theme';
// 1. IMPORT YOUR SHARED HEADER
import SharedHeader from '../../../components/SharedHeader';
import RequestCard from '../components/RequestCard';
import SuccessModal from '../components/SuccessModal';

const CATEGORY_OPTIONS = {
  low: ['Appliance is Destroyed', 'General Wear and Tear', 'Minor Paint Issue', 'Non-essential Plumbing', 'Other Minor Repair'],
  medium: ['Water Heater Malfunction', 'Minor Electrical Issues', 'Pest Control (Non-emergency)', 'Broken Window Pane', 'Leaky Faucet/Toilet'],
  high: ['Major Water Leakage (Flooding)', 'Total Loss of Power/HVAC', 'Gas Leak/Fumes', 'Structural Damage Threat', 'Security Issue'],
  others: ['N/A - See Description Below']
};

export default function MaintenanceScreen() {
  const [urgency, setUrgency] = useState('low');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);

  // Mock Data
  const recentRequests = [
    { id: 1, category: 'Plumbing', status: 'Pending', date: 'Oct 24, 2025', statusColor: Colors.status.warning },
    { id: 2, category: 'Electrical', status: 'Pending', date: 'Oct 20, 2025', statusColor: Colors.status.success },
  ];

  useEffect(() => {
    if (urgency === 'others') {
      setCategory('N/A - See Description Below');
    } else {
      setCategory('');
    }
  }, [urgency]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const handleSubmit = () => {
    if (urgency === 'others' && !description.trim()) {
      alert("Please describe the issue.");
      return;
    }
    if (!category) {
        alert("Please select a category.");
        return;
    }
    setModalVisible(true);
  };

  const getUrgencyColor = (option) => {
    const key = option.toLowerCase();
    if (key === 'low') return Colors.status.success;
    if (key === 'medium') return Colors.status.warning;
    if (key === 'high') return Colors.status.danger;
    return Colors.light.primaryDark;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>

        {/* 2. REPLACED OLD HEADER WITH SHARED HEADER */}
        <SharedHeader title="MAINTENANCE REQUEST" />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* RECENT REQUESTS */}
          <Text style={styles.sectionTitle}>Recent Requests</Text>
          {recentRequests.map((req) => (
            <RequestCard key={req.id} category={req.category} status={req.status} date={req.date} statusColor={req.statusColor} />
          ))}

          {/* SUBMIT FORM */}
          <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Submit Request</Text>

          {/* 1. URGENCY */}
          <Text style={styles.label}>URGENCY</Text>
          <View style={styles.radioGroup}>
            {['LOW', 'MEDIUM', 'HIGH', 'OTHERS'].map((option) => {
              const isSelected = urgency === option.toLowerCase();
              const activeColor = getUrgencyColor(option);
              return (
                <TouchableOpacity key={option} style={styles.radioButton} onPress={() => setUrgency(option.toLowerCase())}>
                  <View style={[styles.radioCircle, isSelected && { borderColor: activeColor }]}>
                    {isSelected && <View style={[styles.selectedRb, { backgroundColor: activeColor }]} />}
                  </View>
                  <Text style={[styles.radioText, isSelected && { color: activeColor, fontWeight: 'bold' }]}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 2. CATEGORY */}
          <Text style={styles.label}>CATEGORY</Text>
          <TouchableOpacity
            style={[styles.inputContainer, urgency === 'others' && styles.disabledInput]}
            onPress={() => urgency !== 'others' && setPickerVisible(true)}
            activeOpacity={urgency === 'others' ? 1 : 0.7}
          >
            <Text style={category ? styles.inputText : styles.placeholderText}>{category || "SELECT ISSUE CATEGORY"}</Text>
            {urgency !== 'others' && <MaterialIcons name="keyboard-arrow-down" size={24} color={Colors.light.textGrey} />}
          </TouchableOpacity>

          {/* 3. DESCRIPTION */}
          <Text style={styles.label}>DESCRIBE THE ISSUE {urgency === 'others' ? '(Required)' : '(Optional)'}</Text>
          <TextInput
            style={[styles.inputContainer, styles.textArea]}
            placeholder={urgency === 'others' ? "Please describe the \"Others\" issue in detail..." : ""}
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          {/* 4. ATTACH PHOTO */}
          <Text style={styles.label}>ATTACH PHOTO/S (Optional)</Text>
          <View style={styles.fileUploadContainer}>
            <TouchableOpacity style={styles.chooseFileBtn} onPress={pickImage}>
              <Text style={styles.chooseFileText}>CHOOSE FILE</Text>
            </TouchableOpacity>
            <Text style={styles.fileName}>{image ? "Image Selected" : "No File Chosen"}</Text>
          </View>
          <Text style={styles.helperText}>Attach a clear image of the problem if available.</Text>

          {/* SUBMIT */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
          <View style={{ height: 100 }} />
        </ScrollView>

        <SuccessModal visible={modalVisible} onClose={() => setModalVisible(false)} />

        {/* CATEGORY PICKER MODAL */}
        <Modal visible={pickerVisible} transparent animationType="slide" onRequestClose={() => setPickerVisible(false)}>
          <TouchableOpacity style={styles.pickerOverlay} activeOpacity={1} onPress={() => setPickerVisible(false)}>
            <TouchableOpacity activeOpacity={1} style={styles.pickerContent} onPress={(e) => e.stopPropagation()}>
              <View style={styles.pickerHeader}>
                  <Text style={styles.pickerTitle}>Select Category</Text>
                  <TouchableOpacity onPress={() => setPickerVisible(false)}>
                      <Ionicons name="close" size={24} color="#333" />
                  </TouchableOpacity>
              </View>
              <FlatList
                data={CATEGORY_OPTIONS[urgency]}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.pickerItem} onPress={() => { setCategory(item); setPickerVisible(false); }}>
                    <Text style={styles.pickerItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background, paddingTop: 50 },
  // Removed old header styles (header, profileCircle, headerTitle, etc.)
  scrollContent: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 14, color: Colors.light.textSecondary, marginBottom: 10 },
  label: { fontSize: 13, fontWeight: '700', color: Colors.light.primaryDark, marginTop: 15, marginBottom: 10 },
  radioGroup: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  radioButton: { flexDirection: 'row', alignItems: 'center', marginRight: 15, marginBottom: 10 },
  radioCircle: { height: 18, width: 18, borderRadius: 9, borderWidth: 1.5, borderColor: Colors.light.textGrey, alignItems: 'center', justifyContent: 'center', marginRight: 6 },
  selectedRb: { width: 10, height: 10, borderRadius: 5 },
  radioText: { fontSize: 12, color: Colors.light.textSecondary, fontWeight: '600' },
  inputContainer: { backgroundColor: '#F9F9F9', borderRadius: 8, borderWidth: 1, borderColor: '#EEE', padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  disabledInput: { backgroundColor: '#E0E0E0', borderColor: '#ccc' },
  inputText: { color: Colors.light.text },
  placeholderText: { color: Colors.light.textGrey, fontSize: 12 },
  textArea: { height: 100, textAlignVertical: 'top', alignItems: 'flex-start' },
  fileUploadContainer: { flexDirection: 'row', alignItems: 'center' },
  chooseFileBtn: { borderWidth: 1, borderColor: '#ddd', backgroundColor: '#F5F5F5', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 4, marginRight: 10 },
  chooseFileText: { fontSize: 11, fontWeight: 'bold', color: Colors.light.textSecondary },
  fileName: { fontSize: 12, color: Colors.light.textGrey },
  helperText: { fontSize: 11, color: Colors.light.textGrey, marginTop: 5 },
  submitButton: { backgroundColor: Colors.light.primaryLight, paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginTop: 30, elevation: 2, shadowColor: Colors.light.primaryMedium, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  submitButtonText: { color: Colors.light.buttonText, fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },

  // MODAL STYLES
  pickerOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  pickerContent: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: '50%' },
  pickerHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  pickerTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.light.primaryDark },
  pickerItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  pickerItemText: { fontSize: 14, color: '#333' }
});