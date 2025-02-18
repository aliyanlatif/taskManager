import { StyleSheet } from "react-native";
import FontFamily from "../../utils/FontFamily";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 22,
      paddingTop: 50,
      backgroundColor: '#9395D3',
    },
    headerTitle: {
      fontSize: 20,
      color: '#fff',
      fontFamily: FontFamily.QuicksandBold,
    },
    content: {
      padding: 20,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      padding: 10,
      marginBottom: 20,
      fontSize: 16,
      fontFamily: FontFamily.QuicksandMedium,
    },
    detailInput: {
      height: 50,
      textAlignVertical: 'top',
    },
    addButton: {
      backgroundColor: '#9395D3',
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 20,
      shadowColor: '#9395D3',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: FontFamily.QuicksandBold,
    },
  });
