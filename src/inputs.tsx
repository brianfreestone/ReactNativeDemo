import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  items: number[];
  remove: (pos: number) => void;
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#aaa',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    width: '100%',
  }
})

export default function Inputs({ items, remove }: Props) {
  return (

    <View
      style={styles.listItem}>
      <Text>
        Inputs
      </Text>
    </View>

  )

}