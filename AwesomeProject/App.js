import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

// Siempre debe de haber un padre, en este caso es el "View"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      textInputValue: "",
    };
  }


  onInputChange = (text) => {
    this.setState({ textInputValue: text });
  }

  onShowAlert = () => {
    Alert.alert(`${this.state.textInputValue}  
    Es lo que escribió!`);
  }

  OnChange = (value) => {
    console.warn(`El switch cambiara a ${value}`);
    this.setState({ switchValue: value });
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Escriba aquí..."
          onChangeText={this.onInputChange}
          value={this.state.textInputValue}
        />

        <Switch
          onValueChange={() => this.OnChange(!this.state.switchValue)}
          value={this.state.switchValue}
        />

        <Button
          // Representa el contesto, la clase a la que esta asignada.
          onPress={this.onShowAlert}
          title="Alerta"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text>MyApp esta trabajando!</Text>
        <StatusBar style="auto" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
