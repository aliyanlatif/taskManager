import { Platform, StyleSheet } from "react-native";
import FontFamily from "../../utils/FontFamily";
import AppColors from "../../theme/appColor";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8E7FF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 22,
      paddingTop: Platform.OS === 'ios' ? 65 : 50,
      backgroundColor: '#9395D3',
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FontFamily.QuicksandBold,
      color: '#fff',
    },
    calendarButton: {
      alignItems: 'center',
    },
    calendarText: {
      fontSize: 12,
    },
    taskList: {
      flex: 1,
      padding: 16,
    },
    taskListContent:{
      paddingBottom: Platform.OS === 'ios' ? 20 : 35,
    },
    taskCard: {
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#00000050',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 3,
    },
    taskContent: {
      flex: 1,
    },
    taskTitle: {
      fontSize: 16,
      fontFamily: FontFamily.QuicksandBold,
      marginBottom: 4,
      color: '#9395D3',
    },
    taskSubtitle: {
      fontSize: 12,
      fontFamily: FontFamily.QuicksandMedium,
    },
    taskActions: {
      flexDirection: 'row',
      gap: 16,
    },
    bottomTabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 16,
      paddingBottom: Platform.OS === 'ios' ? 30 : 20,
      backgroundColor: '#8B89FF',
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    tabItem: {
      alignItems: 'center',
    },
    tabTextStyle: {
      color: AppColors.black,
      fontFamily: FontFamily.QuicksandSemiBold,
    },
    activeTab: {
      fontSize: 14,
      color: AppColors.white,
      fontFamily: FontFamily.QuicksandBold,
    },
  });