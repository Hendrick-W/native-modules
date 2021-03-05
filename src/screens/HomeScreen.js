import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({
  navigation,
}) => {
  return (
    <View style={{flex:1}}>
        <Text>List of Native Modules</Text>
        <View style={STYLES.button}/>
        <Button
          title="Toast Screen"
          onPress={()=>{
            navigation.navigate('ToastScreen')
          }}
        />
        <View style={STYLES.button}/>
        <Button
          title="Device Id"
          onPress={()=>{
            navigation.navigate('DeviceIdScreen')
          }}
        />
        <View style={STYLES.button}/>
        <Button
          title="Battery Info"
          onPress={()=>{
            navigation.navigate('BatteryInfoScreen')
          }}
        />
        <View style={STYLES.button}/>
        <Button
          title="Get API Level"
          onPress={()=>{
            navigation.navigate('APILevel')
          }}
        />
        <View style={STYLES.button}/>
        <Button
          title="Get Release Number"
          onPress={()=>{
            navigation.navigate('ReleaseNumberScreen')
          }}
        />
    </View>
)};

const STYLES = StyleSheet.create({
  button: {
    margin: 10
  }
})

export default HomeScreen;
