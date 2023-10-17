import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './constants/colors'

const Signup = () => {
  return (
    <SafeAreaView style={{paddingTop:30}}>
      <View style={{ flex:1, backgroundColor: COLORS.white}}>
        <View style={{ flex: 1, paddingTop: 15, marginHorizontal: 22 }}>
          <Text
            style={{
             fontWeight: "bold",
              fontSize: 20,
                color: COLORS.black,
                marginVertical: -15,
            }}> Create Account</Text>
          
         
          
      </View>
      </View>
  </SafeAreaView>
  )
}

export default Signup