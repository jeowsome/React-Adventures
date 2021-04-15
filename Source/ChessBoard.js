import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const ChessBoard = () => {
  const ChessRow = ({ row }) => {
    const cells = [];
    for (var j = 8; j != 0; j--) {
      cells.push(
        <TouchableHighlight
          activeOpacity={0.4}
          underlayColor={(j + row) % 2 == 0 ? "pink" : "red"}
          style={[
            styles.button,
            (j + row) % 2 == 0 ? styles.black : styles.white,
          ]}
          onPress={() => {
            console.log("Amaazzzing");
          }}
        >
          <Text>{""}</Text>
        </TouchableHighlight>
      );
      //   count += 1;
    }
    return <View style={styles.row}>{cells}</View>;
  };
  const rows = [];
  for (var i = 8; i != 0; i--) {
    rows.push(<ChessRow key={`${i}`} row={i} />);
  }
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
  },
  container: {
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width - 32,
    borderColor: "black",
    borderWidth: 3,
    margin: 16,
  },
  button: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  black: {
    backgroundColor: "black",
  },
  white: {
    backgroundColor: "white",
  },
});
export default ChessBoard;
