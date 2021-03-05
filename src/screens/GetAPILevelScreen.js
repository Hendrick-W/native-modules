import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';

import CustomModule from '../Modules/CustomModule'

const GetAPILevelScreen = ({
    params,
}) => {
  const [API, setAPI] = useState(null)
  useEffect(()=>{
    CustomModule.getApiLevel().then((apiLevel)=> {
      setAPI(apiLevel)
    })
  }, [])
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>GetAPILevelScreen</Text>
        <Text>{API}</Text>
    </View>
)};

export default GetAPILevelScreen;
