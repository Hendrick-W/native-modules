import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import CustomModule from '../Modules/CustomModule'

const DeviceIdScreen = ({
    params,
}) => {
  const [deviceId, setDeviceId] = useState("");
  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await CustomModule.getDeviceId();
      setDeviceId(id)
    }
    fetchDeviceId();
  }, []);
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Text>Device Id:</Text>
      <Text>{deviceId}</Text>
    </View>
)};

export default DeviceIdScreen;
