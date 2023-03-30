import * as React from 'react';
import {Button, View,Linking,Alert, Text, Platform, } from 'react-native';
import { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import { checkMultiplePermissions } from './permissions';
import {PERMISSIONS} from 'react-native-permissions';
const Main = ({navigation}: NavigationProp) => {
   const checkForPermissions=async() =>{
    const permissions =PERMISSIONS.IOS.MICROPHONE;


    // Call our permission service and check for permissions
await checkMultiplePermissions(permissions);
  
   
  }

  React.useEffect(()=>{
    checkForPermissions()
  },[])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Unity Screen</Text>
      <Button
        title="Go to Unity"
        onPress={() => navigation.navigate('Unity')}
      />
    </View>
  );
};

export default Main;
