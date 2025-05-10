// import { View, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
// import React from 'react';

// const StatusBarExample = () => {
//     return (
//         <SafeAreaView>
            
//             <StatusBar
//                 barStyle={'dark-content'}
//                 backgroundColor={'pink'}
//                 hidden={false} />

//             <Text>StatursBarExample</Text>

//         </SafeAreaView>
//     )
// }

// export default StatusBarExample;

import React from 'react';
import { SafeAreaView, View, Text, StatusBar, Platform, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fake background View for StatusBar on Android */}
      {Platform.OS === 'android' && (
        <View style={{ height: StatusBar.currentHeight, backgroundColor: 'rgba(0,0,0,0.2)' }} />
      )}

      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
      />

      <View style={styles.container}>
        <Text style={styles.text}>StatusBarExample</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200fe'
    },
    text:{

        color: '#fff',
        fontSize: 24
    }
});


// import React from 'react';
// import { SafeAreaView, View, Text, StatusBar, Platform, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar
//         barStyle={"light-content"}
//         backgroundColor="rgba(255, 9, 9, 0.2)"
//         hidden={false}
//         translucent={false}
        
//       />

//       <View style={styles.container}>
//         <Text style={styles.text}>StatusBarExample</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#6200fe',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Prevents overlap
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 24,
//   },
// });

