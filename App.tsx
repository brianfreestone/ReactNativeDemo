import { Text, View, StyleSheet, Alert } from "react-native"
import Nav from "./src/nav"
import { useEffect, useState } from "react"
import Generate from "./src/generate";
import ListItems from "./src/listitems";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Inputs from "./src/inputs";

export default function App() {
  const [message, setMessage] = useState(true);
  const [random, setRandom] = useState([20, 55]);

  useEffect(() => {
    setTimeout(() => {
      setMessage(false)
    }, 2000)
  }, [])

  const onAddRandom = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandom([...random, newNum])
  }

  const onItemRemove = (position: number) => {
    const newArray = random.filter((item, i )=>{
      return position !== i;
    })
    setRandom(newArray);
  }

  return (
    <View style={styles.mainView}>
      <Nav>
      </Nav>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Text for View 1
        </Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Text for View 2
        </Text>
        {/* </View>
      {message ?<Text>Hello Everybody</Text> : null}
      <View> */}
      </View>
      <View>
        <Generate add={onAddRandom} />
      </View>
      <ListItems
        remove={(pos)=>onItemRemove(pos)}
        items={random} />
        <Inputs/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },

  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5
  },

  basicText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  }
})
