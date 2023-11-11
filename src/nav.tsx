import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Nav() {

  const styles = StyleSheet.create({
    nav: {
      backgroundColor: 'red',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    }
  })

  return (
    <View style={styles.nav}>
      <Text>
        My app
      </Text>
    </View>
  )

} 