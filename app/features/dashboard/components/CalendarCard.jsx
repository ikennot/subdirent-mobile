import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default function CalendarCard({
  paymentData = [], 
  maintenanceEvents = [], 
  currentDate, 
  onDateChange,
  isLoading 
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const getFirstDay = (m, y) => new Date(y, m, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDay(month, year);
  const daysArray = Array.from({ length: 35 }, (_, i) => {
    const d = i - firstDay + 1;
    return (d > 0 && d <= daysInMonth) ? d : null;
  });

  const getPaymentColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid': return '#00C851'; 
      case 'partial': return '#FF9F1C'; 
      case 'due': return '#D32F2F'; 
      default: return '#D32F2F';
    }
  };

  const getMaintenanceColor = (status) => {
    switch (status) {
      case 'Completed': return '#33B5E5'; 
      case 'In Progress': return '#9c27b0'; 
      default: return '#E4B004'; 
    }
  };

  const handleDayPress = (day, payment, maintenance) => {
    if (!payment && !maintenance) return;
    let message = '';
    
    if (payment) {
      const label = payment.status === 'due' ? 'AMOUNT DUE' : 'AMOUNT PAID';
      const amount = payment.status === 'due' ? payment.monthly_rent : payment.amount_paid;
      message += `Rent Status: ${payment.status.toUpperCase()}\n${label}: ₱${amount?.toLocaleString() || 0}\n\n`;
    }
    
    if (maintenance) {
      message += `Maintenance: ${maintenance.category}\nStatus: ${maintenance.status}`;
    }
    
    Alert.alert(`Schedule: ${day} ${currentDate.toLocaleString('default', { month: 'short' })}`, message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onDateChange(new Date(year, month - 1, 1))} disabled={isLoading} style={styles.arrowBtn}>
          <ChevronLeft size={20} color="#333" />
        </TouchableOpacity>
        
        <View style={styles.dateSelector}>
            <Text style={styles.dateText}>{currentDate.toLocaleString('default', { month: 'short' })}</Text>
            <Text style={styles.dateText}>{year}</Text>
        </View>
        
        <TouchableOpacity onPress={() => onDateChange(new Date(year, month + 1, 1))} disabled={isLoading} style={styles.arrowBtn}>
          <ChevronRight size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {DAYS_OF_WEEK.map(d => <Text key={d} style={styles.weekText}>{d}</Text>)}
      </View>

      <View style={styles.gridContainer}>
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="small" color="#333" />
          </View>
        )}

        <View style={styles.grid}>
          {daysArray.map((day, i) => {
            if (!day) return <View key={i} style={styles.dayCell} />;

            const payment = paymentData.find(p => Number(p.day) === day);
            const maintenance = maintenanceEvents.find(m => Number(m.day) === day);
            
            const hasEvent = payment || maintenance;

            // Determine Label Text
            let labelText = '';
            if (payment) labelText = payment.status.toUpperCase();
            else if (maintenance) labelText = 'MAINT';

            return (
              <TouchableOpacity 
                key={i} 
                style={styles.dayCell}
                onPress={() => handleDayPress(day, payment, maintenance)}
                disabled={!hasEvent}
              >
                {/* 1. Box Style */}
                <View style={[styles.circle, hasEvent && styles.activeCircle]}>
                  
                  {/* 2. Top Right Dots */}
                  <View style={styles.topRightDots}>
                      {/* Payment Dot */}
                      {payment && (
                        <View style={[styles.dot, { backgroundColor: getPaymentColor(payment.status) }]} />
                      )}
                      {/* Maintenance Dot */}
                      {maintenance && (
                        <View style={[styles.dot, { backgroundColor: getMaintenanceColor(maintenance.status) }]} />
                      )}
                  </View>

                  {/* Day Number */}
                  <Text style={[styles.dayText, hasEvent && styles.activeDayText]}>{day}</Text>
                  
                  {/* 3. Bottom Text Label */}
                  {hasEvent && (
                    <Text style={styles.miniLabel} numberOfLines={1}>
                      {labelText}
                    </Text>
                  )}

                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Legend */}
      <View style={styles.legendContainer}>
         <View style={styles.legendRow}>
            <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#00C851' }]} />
                <Text style={styles.legendText}>Paid</Text>
            </View>
            <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#FF9F1C' }]} />
                <Text style={styles.legendText}>Partial</Text>
            </View>
            <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#D32F2F' }]} />
                <Text style={styles.legendText}>Due</Text>
            </View>
         </View>
         <View style={styles.legendRow}>
             <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#9c27b0' }]} />
                <Text style={styles.legendText}>In Progress</Text>
            </View>
            <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#33B5E5' }]} />
                <Text style={styles.legendText}>Completed</Text>
            </View>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: Colors.light.cardBg, 
    borderRadius: 20, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: Colors.light.borderLight, 
    marginBottom: 10 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20, 
    gap: 10 
  },
  arrowBtn: { 
    padding: 5 
  },
  dateSelector: {
    flexDirection: 'row',
    gap: 5,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: Colors.light.cardBg
  },
  dateText: { 
    fontSize: 14, 
    color: Colors.light.dark, 
    fontWeight: '500' 
  },
  weekRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10 
  },
  weekText: { 
    width: 30, 
    textAlign: 'center', 
    color: Colors.light.extraLightGrey, 
    fontSize: 12 
  },
  gridContainer: { 
    position: 'relative' 
  },
  loadingOverlay: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.8)', 
    zIndex: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
},
  dayCell: { 
    width: '14.2%', 
    aspectRatio: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 5 
  },
  circle: { 
    width: 38, 
    height: 38, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8 
  },
  activeCircle: { 
    backgroundColor: Colors.light.dark 
  }, 
  dayText: { 
    fontSize: 14, 
    color: Colors.light.dark, 
    marginTop: -4 
  },
  activeDayText: { 
    color: Colors.light.background, 
    fontWeight: '600' 
  },
  topRightDots: {
    position: 'absolute',
    top: 4,
    right: 4,
    flexDirection: 'row',
    gap: 2
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: Colors.light.background 
  },
  miniLabel: { 
    position: 'absolute', 
    bottom: 3, 
    fontSize: 6, 
    color: Colors.light.textGrey, 
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  legendContainer: { 
    marginTop: 15, 
    gap: 5 
  },
  legendRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 15, 
    flexWrap:'wrap' 
  },
  legendItem: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  legendDot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginRight: 6 
  },
  legendText: { 
    fontSize: 10, 
    color: Colors.light.mediumGrey 
  }
});