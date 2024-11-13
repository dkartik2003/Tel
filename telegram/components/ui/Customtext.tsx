import { View, Text } from 'react-native'
import React from 'react'

interface Props{
  variant?:'h1'|'h2'|'h3'|'h
}
const Customtext = () => {
  return (
    <View>
      <Text>Customtext</Text>
    </View>
  )
}

export default Customtext