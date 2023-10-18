import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleInput = (value: string) => {
    if (value === "C") {
      setInput("0");
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };
  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(Number.isFinite(result) ? result.toString() : "Error");
    } catch (error) {
      setInput("Error");
    }
  };

  const layout = [
    [
      { inputValue: "7", style: styles.button, handler: handleInput },
      { inputValue: "8", style: styles.button, handler: handleInput },
      { inputValue: "9", style: styles.button, handler: handleInput },
      {
        inputValue: "/",
        displayText: "÷",
        style: styles.operatorButton,
        handler: handleInput,
      },
    ],
    [
      { inputValue: "4", style: styles.button, handler: handleInput },
      { inputValue: "5", style: styles.button, handler: handleInput },
      { inputValue: "6", style: styles.button, handler: handleInput },
      {inputValue: "*", displayText: "×", style: styles.operatorButton,handler: handleInput },
        
    ],
    [
      { inputValue: "1", style: styles.button, handler: handleInput },
      { inputValue: "2", style: styles.button, handler: handleInput },
      { inputValue: "3", style: styles.button, handler: handleInput },
      { inputValue: "-", style: styles.operatorButton, handler: handleInput },
    ],
    [
      { inputValue: "0", style: styles.button, handler: handleInput },
      { inputValue: ".", style: styles.button, handler: handleInput },
      { inputValue: "C", style: styles.button, handler: handleInput },
      { inputValue: "+", style: styles.operatorButton, handler: handleInput },
    ],
    [
      {  inputValue: "=", style: styles.calculateButton, handler: handleCalculate },
    ],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline={false} style={styles.input} editable={false}>
          {input}
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        {layout.map((rows, index) => (
          <View style={styles.row} key={index}>
            {rows.map((row) => (
              <TouchableOpacity
                key={row.inputValue}
                style={row.style}
                onPress={() => row.handler(row.inputValue)}
              >
                <Text style={styles.buttonText}>
                  {row?.displayText ? row.displayText : row.inputValue}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  buttonContainer: {
    flex: 3,
  // justifyContent: "space-evenly"
  },
  inputContainer: {
    height: 160,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#505050",
    flex: 1,
    padding: 16,
    borderRadius: 20,
    margin:6,
  },
  input: {
    fontSize: 60,
    color: "#fff",
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
  },
  operatorButton: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
    borderRadius: 38,
    margin: 6,
  },
  buttonText: {
    fontSize: 28,
    textAlign: "center",
    color: "#fff",
  },
  calculateButton: {
    backgroundColor: "#FF9500",
    borderRadius: 38,
    padding: 16,
    width: "100%",
  },
});
export default Calculator;