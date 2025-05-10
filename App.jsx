/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import LoginForm from './src/components/LoginForm';
import Grid from './src/components/Grid';
import UseEffectMountent from './src/components/UseEffectMountent';
import UseEffectUpdate from './src/components/UseEffectUpdate';
import TouchableOpacityHihlight from './src/components/TouchableOpacityHihlight';
import Loader from './src/components/Loader';
import PressableComponent from './src/components/PressableComponent';
import StatusBarExample from './src/components/StatusBarExample';
import UseRefHook from './src/components/UseRefHook';
import ModalDialogBox from './src/components/ModalDialogBox';
import AlertExample from './src/components/AlertExample';
import GET_API from './src/components/GET_API';
import POST_API from './src/components/POST_API';
import PUT_API from './src/components/PUT_API';
import PATCH_API from './src/components/PATCH_API';
import DELETE_API from './src/components/DELETE_API';
import GET_API_LIST from './src/components/GET_API_LIST';
import PlarformExample from './src/components/PlarformExample';
import Srearch from './src/components/Srearch';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text style = {{fontSize : 30}}>React Native</Text>

      <Button title='Press Here'/> */}

      {/* <FlatListScreen /> */}
      {/* <SectionListScreen /> */}
      {/* <LoginForm /> */}
      {/* <Grid /> */}
      {/* <UseEffectMountent/> */}
      {/* <UseEffectUpdate /> */}
      {/* <TouchableOpacityHihlight /> */}
      {/* <Loader /> */}
      {/* <PressableComponent /> */}
      {/* <StatusBarExample /> */}
      {/* <UseRefHook /> */}
      {/* <ModalDialogBox /> */}
      {/* <AlertExample /> */}
      {/* <AlertExample /> */}
      {/* <GET_API /> */}
      {/* <POST_API /> */}
      {/* <PATCH_API /> */}
      {/* <DELETE_API /> */}
      {/* <GET_API_LIST /> */}
      {/* <PlarformExample /> */}
      <Srearch />
    </SafeAreaView>
  );
};

export default App;