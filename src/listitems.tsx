import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  items: number[];
  remove: (pos: number) => void;
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    width: '100%',
  }
})

export default function ListItems({ items, remove }: Props) {
  return (
    items.map((item: number, i) => (
      <Pressable
        style={{ width: "100%" }}
        onPress={() => remove(i)}
        key={i} 
      >
        <View 
          style={styles.listItem}>
          <Text>
            {item}
          </Text>
        </View>
      </Pressable>
    ))
  )
}