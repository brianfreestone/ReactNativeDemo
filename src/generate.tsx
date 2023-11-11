import React from 'react'
import { Alert, Pressable, 
  StyleSheet, Text, 
  TouchableHighlight, TouchableOpacity, 
  View } from 'react-native'

interface Props {
  add: () => void;
}

export default function Generate({add}: Props) {

  const styles = StyleSheet.create({
    generate: {
      backgroundColor: '#00BCD4',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    }
  })

  return (
    <TouchableOpacity
      onPress={add}
      disabled={false}
    >

      <View style={styles.generate}>

        <Text style={{ color: 'black' }}>
          Add Number
        </Text>

      </View>
    </TouchableOpacity>
  )

} 