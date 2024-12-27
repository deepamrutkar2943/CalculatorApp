import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{input}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {['1', '2', '3', '+'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)} style={styles.button}>
              {value}
            </Button>
          ))}
          {['4', '5', '6', '-'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)} style={styles.button}>
              {value}
            </Button>
          ))}
          {['7', '8', '9', '*'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)} style={styles.button}>
              {value}
            </Button>
          ))}
          {['C', '0', '=', '/'].map((value) => (
            <Button
              key={value}
              mode="contained"
              onPress={() => handlePress(value)}
              style={[styles.button, value === '=' && styles.equalsButton]}
            >
              {value}
            </Button>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Calc by Deep</Text>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 36,
    color: '#000',
  },
  inputContainer: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 24,
    color: '#000',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: '#000',
  },
});