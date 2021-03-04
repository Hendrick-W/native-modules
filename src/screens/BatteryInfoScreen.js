import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import CustomModule from '../Modules/CustomModule'

const BatteryInfo = ({
}) => {
  const [batteryInfo, setBatteryInfo] = useState(null)
  const getBatteryLevel = (callback) => {
    CustomModule.getBatteryStatus(callback)
  }
  useEffect(()=> {
    getBatteryLevel((error, batteryInfo) => {
      if(error){
        console.error(`Error found! ${error}`)
      } else {
        setBatteryInfo(batteryInfo)
      }
    })
  }, [])
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Text>Battery Info:</Text>
      <Text>{batteryInfo}%</Text>
    </View>
)};

export default BatteryInfo;
