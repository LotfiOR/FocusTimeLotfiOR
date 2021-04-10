  import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from "./src/utils/colors";
import { fontSizes, paddingSizes } from "./src/utils/sizes";
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';


export default function App() {
  const [focusSubject, setFocusSubject] = useState("Mergoudjage");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}/> 
      ) : (
        <Focus addSubject={setFocusSubject} />
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop:paddingSizes.md,
    backgroundColor: colors.darkBlue,
  },
});
