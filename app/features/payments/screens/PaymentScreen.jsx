import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Colors } from '../../../../constants/theme';
import SharedHeader from '../../../components/SharedHeader';

// ✅ 1. NEW IMPORT
import LedgerModal from '../components/LedgerModal';

// ASSETS
const GCASH_ICON = require('../../../../assets/images/gcash.png');
const CARD_ICON = require('../../../../assets/images/card payment.png');

export default function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [cardDetails, setCardDetails] = useState('');

  // ✅ 2. NEW STATE FOR MODAL
  const [ledgerVisible, setLedgerVisible] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <SharedHeader title="PAYMENT" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* TOP ROW: BALANCE & PAYMENT ENTRY */}
        <View style={styles.topRow}>

          {/* Outstanding Balance */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>OUTSTANDING{'\n'}BALANCE</Text>
            <Text style={styles.balanceMonth}>For Month:</Text>
            <Text style={styles.balanceAmount}>0</Text>
          </View>

          {/* Right Info Section */}
          <View style={styles.rightInfo}>
             <View style={styles.infoRow}>
                <View style={[styles.dot, { backgroundColor: '#90EE90' }]} />
                <Text style={styles.infoText}>Last Payment:</Text>
             </View>
             <View style={styles.infoRow}>
                <View style={[styles.dot, { backgroundColor: '#87CEEB' }]} />
                <Text style={styles.infoText}>Next Due Date:</Text>
             </View>

             {/* Payment Method Toggle */}
             <View style={styles.enterPaymentBox}>
                <TouchableOpacity style={styles.enterPaymentHeader}>
                    <Text style={styles.enterPaymentLabel}>ENTER PAYMENT</Text>
                </TouchableOpacity>

                <View style={styles.methodRow}>
                   <TouchableOpacity
                      style={[styles.methodBtn, paymentMethod === 'gcash' && styles.activeMethod]}
                      onPress={() => setPaymentMethod('gcash')}
                   >
                      <Image source={GCASH_ICON} style={styles.methodIcon} resizeMode="contain" />
                      <Text style={[styles.methodText, paymentMethod === 'gcash' && styles.activeMethodText]}>G-CASH</Text>
                   </TouchableOpacity>

                   <Text style={styles.orText}>=</Text>

                   <TouchableOpacity
                      style={[styles.methodBtn, paymentMethod === 'card' && styles.activeMethod]}
                      onPress={() => setPaymentMethod('card')}
                   >
                      <Image source={CARD_ICON} style={styles.methodIcon} resizeMode="contain" />
                      <Text style={[styles.methodText, paymentMethod === 'card' && styles.activeMethodText]}>CARD PAYMENT</Text>
                   </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.payNowBtn}>
                   <Ionicons name="cash-outline" size={12} color="white" style={{marginRight:4}} />
                   <Text style={styles.payNowText}>PAY NOW</Text>
                </TouchableOpacity>
             </View>
          </View>
        </View>

        {/* RECENT PAYMENTS */}
        <Text style={styles.sectionTitle}>Recent Rent Payments</Text>
        <View style={styles.tableCard}>
            <View style={styles.tableHeader}>
                <Text style={[styles.colHeader, { flex: 2 }]}>DESCRIPTION</Text>
                <Text style={[styles.colHeader, { flex: 1.5 }]}>DATE PAID</Text>
                <Text style={[styles.colHeader, { flex: 1.5 }]}>AMOUNT</Text>
                <Text style={[styles.colHeader, { flex: 1, textAlign: 'right' }]}>INVOICE</Text>
            </View>
            <View style={styles.tableBody}>
                <View style={styles.emptyContainer}>
                    <Ionicons name="trash-outline" size={20} color="#ccc" />
                </View>
            </View>
        </View>

        {/* AUTO PAY */}
        <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Auto Payment</Text>
        <View style={styles.autoPayCard}>
           <Text style={styles.autoPayDesc}>
             Set up Autopay using your card to automatically pay your monthly rent on the due date.
           </Text>
           <Text style={styles.inputLabel}>CARD DETAILS</Text>
           <TextInput
              style={styles.input}
              value={cardDetails}
              onChangeText={setCardDetails}
           />
           <TouchableOpacity style={styles.activateBtn}>
              <Ionicons name="radio-button-on" size={12} color="white" style={{marginRight:5}} />
              <Text style={styles.activateText}>ACTIVATE AUTOPAY</Text>
           </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <Text style={styles.ledgerDesc}>
           View every transaction, bill, and payment recorded on your account:
        </Text>

        {/* ✅ 3. UPDATE BUTTON TO OPEN MODAL */}
        <TouchableOpacity
          style={styles.ledgerBtn}
          onPress={() => setLedgerVisible(true)}
        >
           <Text style={styles.ledgerBtnText}>VIEW ACCOUNT FULL LEDGER</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ✅ 4. RENDER MODAL */}
      <LedgerModal
        visible={ledgerVisible}
        onClose={() => setLedgerVisible(false)}
      />

    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background, paddingTop: 50 },
  scrollContent: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 13, color: Colors.light.textSecondary, marginBottom: 10, marginTop: 20 },

  // Top Row
  topRow: { flexDirection: 'row', justifyContent: 'space-between' },
  balanceCard: {
    flex: 0.9, backgroundColor: '#EAF8FF', borderRadius: 12, padding: 15, marginRight: 15, justifyContent: 'center',
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 2,
  },
  balanceLabel: { fontSize: 12, fontWeight: '800', color: Colors.light.primaryDark, marginBottom: 5 },
  balanceMonth: { fontSize: 10, color: Colors.light.textGrey },
  balanceAmount: { fontSize: 36, fontWeight: 'bold', color: '#00E676', marginTop: 10 },

  rightInfo: { flex: 1.1, paddingLeft: 0, justifyContent: 'space-between' },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  dot: { width: 6, height: 6, marginRight: 6 },
  infoText: { fontSize: 9, color: Colors.light.textGrey },

  enterPaymentBox: {
    marginTop: 10, backgroundColor: '#fff', borderRadius: 10, padding: 10,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3,
  },
  enterPaymentHeader: { alignSelf: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 4, marginBottom: 10 },
  enterPaymentLabel: { fontSize: 8, fontWeight: '700', color: Colors.light.textSecondary, letterSpacing: 0.5 },
  methodRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingHorizontal: 5 },
  methodBtn: { alignItems: 'center', opacity: 0.4 },
  activeMethod: { opacity: 1 },
  methodIcon: { width: 20, height: 15, marginBottom: 2 },
  methodText: { fontSize: 7, fontWeight: 'bold', color: Colors.light.textGrey },
  activeMethodText: { color: Colors.light.primaryDark },
  orText: { fontSize: 10, color: '#ccc' },
  payNowBtn: { backgroundColor: '#00E676', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 6 },
  payNowText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },

  // Table
  tableCard: { backgroundColor: '#EAF8FF', borderRadius: 10, padding: 15, minHeight: 100 },
  tableHeader: { flexDirection: 'row', marginBottom: 10 },
  colHeader: { fontSize: 9, fontWeight: '800', color: Colors.light.primaryDark },
  tableBody: { flex: 1, justifyContent: 'flex-end' },
  emptyContainer: { alignItems: 'flex-end', marginTop: 20 },

  // Auto Pay
  autoPayCard: { backgroundColor: '#EAF8FF', borderRadius: 12, padding: 15 },
  autoPayDesc: { fontSize: 10, color: Colors.light.textSecondary, marginBottom: 15, lineHeight: 14 },
  inputLabel: { fontSize: 9, fontWeight: '800', color: Colors.light.primaryDark, marginBottom: 5 },
  input: { backgroundColor: '#F5F9FC', borderRadius: 6, borderWidth: 1, borderColor: '#CEDBE5', paddingHorizontal: 10, paddingVertical: 5, height: 35, marginBottom: 10 },
  activateBtn: { backgroundColor: '#00E676', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, alignSelf: 'flex-end', paddingHorizontal: 12 },
  activateText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },

  // Footer
  ledgerDesc: { marginTop: 25, fontSize: 11, color: Colors.light.textGrey, marginBottom: 10, textAlign: 'left', paddingRight: 40 },
  ledgerBtn: { backgroundColor: '#7FCBF0', borderRadius: 8, paddingVertical: 15, alignItems: 'center', shadowColor: Colors.light.primaryLight, shadowOffset: {width:0, height:2}, shadowOpacity: 0.3, shadowRadius: 4, elevation: 3 },
  ledgerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 12, letterSpacing: 0.5 },
});