import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, paddingSizes } from '../utils/sizes';

const minutesToMillis = (min) => {
  return min * 60 * 1000;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes,
  setIsStarted,
  isStarted,
  isPaused,
  onProgress, 
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const initMinutes = (minutes) => setMillis(minutesToMillis(minutes));
  const interval = useRef(null);

  const countDown = () => {
   // console.log(interval.current)
    if (millis > 0) {
      setMillis((prevState) => {
        onProgress((prevState - 1000) / minutesToMillis(minutes));
        return prevState - 1000;
      });
    }
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
    //return () => clearInterval(interval.current);
  }, [minutes]); //Countdown component rerender each time a new "minutes" button is pressed.

  useEffect(() => { 
    console.log('component has just mounted')
    if (!isStarted) {
      return //() => clearInterval(interval.current);
      // if (interval.current) clearInterval(interval.current);
    }
    interval.current = setInterval(countDown, 1000); 
   return (()=>(clearInterval(interval.current),console.log('component has just unmounted')))
  },[isStarted]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)} 
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: fontSizes.xxxl,
    color: colors.white,
    padding: paddingSizes.lg,
    fontWeight: 'bold',
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
