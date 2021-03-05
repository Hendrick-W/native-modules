import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';

import CustomModule from '../Modules/CustomModule'

const ReleaseNumberScreen = ({
    params,
}) => {
  const [releaseNumber, setReleaseNumber] = useState(null)
  useEffect(() => {
    CustomModule.getBuildNumber().then((buildNumber)=>{
      setReleaseNumber(buildNumber)
    })
  }, []);
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Android</Text>
        <Text>{releaseNumber}</Text>
    </View>
)};

export default ReleaseNumberScreen;
