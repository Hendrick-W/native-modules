import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import CustomModule from '../Modules/CustomModule'

const ToastScreen = ({
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

  CustomModule.show()
  return (
    <View>
      <Text>Device Id:</Text>
      <Text>{deviceId}</Text>
    </View>
)};

export default ToastScreen;
