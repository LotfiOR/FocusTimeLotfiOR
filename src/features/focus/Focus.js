import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus=({ addSubject })=> {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would like to focus on?</Text>  
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: paddingSizes.md }}
            onSubmitEditing={({ nativeEvent }) => { 
              setTmpItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => addSubject(tmpItem)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: paddingSizes.lg,
  },
  inputContainer: {
    paddingTop: paddingSizes.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
