import { Text, View } from 'react-native-ui-lib';
import AppTheme from './theme';

export default function App() {
  AppTheme();
  return (
    <View >
      <Text displayTitle lightcoral> HEI</Text>
      <Text leadText green> hello </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
