import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime,isStarted,setIsStarted,setMinutes }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() =>{
        onChangeTime(10)
        //setMinutes(10)
        isStarted?setIsStarted(false):null
        }
        } />
      </View> 
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() =>{
        onChangeTime(15)
        //setMinutes(15)
        isStarted?setIsStarted(false):null
        }
        } />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() =>{
        onChangeTime(20)
        //setMinutes(20)
        isStarted?setIsStarted(false):null
        }
        } />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
  // buttonWrapper: {
  //   flex: 0.3,
  //   padding: 5,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
});
