import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

export default function CalendarCard({ paymentData = [] }) {
  const [currentDate] = useState(new Date(2025, 8, 1)); 
  const theme = Colors.light;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const totalSlots = 35;
  const daysArray = Array.from({ length: totalSlots }, (_, i) => {
    const dayNumber = i - firstDay + 1;
    return (dayNumber > 0 && dayNumber <= daysInMonth) ? dayNumber : null;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity><ChevronLeft size={20} color={theme.text} /></TouchableOpacity>
        <View style={styles.dateSelector}>
          <Text style={styles.monthText}>{monthNames[month]}</Text>
          <Text style={styles.yearText}>{year}</Text>
        </View>
        <TouchableOpacity><ChevronRight size={20} color={theme.text} /></TouchableOpacity>
      </View>
      
      {/* Week Row */}
      <View style={styles.weekRow}>
        {DAYS_OF_WEEK.map((day) => (<Text key={day} style={styles.weekText}>{day}</Text>))}
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {daysArray.map((day, index) => {
          const payment = paymentData.find(p => p.day === day);
          const isPaid = !!payment;

          return (
            <View key={index} style={styles.dayCell}>
              {day && (
                <View style={[styles.dateCircle, isPaid && { backgroundColor: theme.primaryDark }]}> 
                  <Text style={[styles.dayText, isPaid && { color: theme.buttonText }]}>
                    {day}
                  </Text>
                  {isPaid && (
                    <Text style={styles.paidLabel}>Paid - ${payment.amount}</Text>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.cardBg,
    borderRadius: 20, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#eee', 
    marginBottom: 25,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, shadowRadius: 5, 
    elevation: 2,
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
},
  dateSelector: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.light.background, 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderRadius: 12 
},
  monthText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginRight: 5, 
    color: Colors.light.text 
},
  yearText: { 
    fontSize: 16, 
    color: Colors.light.textSecondary 
},
  weekRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10,
    paddingHorizontal: 5 
},
  weekText: { 
    width: 30, 
    textAlign: 'center', 
    color: Colors.light.textGrey, 
    fontSize: 12 
},
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
},
  dayCell: { 
    width: '14.28%', 
    aspectRatio: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 5 
},
  dateCircle: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12 
},
  dayText: { 
    fontSize: 14, 
    color: Colors.light.text 
},
  paidLabel: { 
    fontSize: 6, 
    color: '#D1D5DB', 
    textTransform: 'uppercase', 
    marginTop: 1 
},
});