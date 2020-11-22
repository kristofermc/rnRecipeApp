import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';

function TimerScreen() {
  // Timer References
  const refTimer = useRef();

  const refStamp = 0;

  // For keeping a track on the Timer
  const [timerEnd, setTimerEnd] = useState(true);

  const [input, setInput] = useState(input);

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    alert(input + ' Minute Timer over!');
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff8f2',
        }}>
        <View style={{display: timerEnd ? 'none' : 'flex'}}>
          <CountDownTimer
            ref={refTimer}
            timestamp={refStamp + input * 60}
            timerCallback={timerCallbackFunc}
            containerStyle={{
              height: 320,
              width: 320,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 320,
              backgroundColor: '#ff1100',
            }}
            textStyle={{
              fontSize: 56,
              color: '#fff',
              fontWeight: '500',
              letterSpacing: 0.25,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            display: timerEnd ? 'flex' : 'none',
            height: 320,
            width: 320,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 320,
            backgroundColor: '#e04338',
            marginTop: 50,
          }}
          onPress={() => {
            setTimerEnd(false);
            refTimer.current.resetTimer();
          }}>
          <Text style={{fontSize: 56, color: '#fff', fontWeight: 'bold'}}>
            Go!
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            height: 40,
            width: 360,

            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
            marginTop: 50,
          }}>
          How many Minutes?
        </Text>
        <TextInput
          style={{
            height: 120,
            width: 120,
            borderWidth: 1,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
          }}
          keyboardType="number-pad"
          placeholderText="How many minutes?"
          labelValue={input}
          onChangeText={(userInput) => setInput(userInput)}
          value={input}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 80,
              backgroundColor: '#e04338',
              marginTop: 50,
              marginLeft: 50,
              marginRight: 50,
            }}
            onPress={() => {
              setTimerEnd(false);
              refTimer.current.resetTimer();
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Restart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 80,
              backgroundColor: '#e04338',
              marginTop: 50,
              marginLeft: 50,
              marginRight: 50,
            }}
            onPress={() => {
              setTimerEnd(true);
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              Stop
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default TimerScreen;
