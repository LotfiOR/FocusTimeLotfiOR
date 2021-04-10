import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
// import { RoundedButton } from '../../components/RoundedButton';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  
  const changeTime = (min)=>{
  setMinutes(min)
  //console.log("minutes from Timer component ",min)
  }
  const onProgress=(progress)=>{
    setProgress(progress)
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes={minutes} setIsStarted={setIsStarted} isStarted={isStarted} isPaused={!isStarted} onProgress={onProgress}/>
      </View>
      <View style={{ paddingTop: paddingSizes.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: paddingSizes.sm }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2" 
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
      <Timing setMinutes={setMinutes}  onChangeTime={changeTime} setIsStarted={setIsStarted} isStarted={isStarted}/>
      {/*"onChangeTime" will be inherited by the "Timing" component and is equal to the "changeTime" function*/}
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            // size={50}
            onPress={() => setIsStarted(true)}
          />
        ) : (
          <RoundedButton
            title="Pause"
            // size={50}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection:'row',

  },
});
