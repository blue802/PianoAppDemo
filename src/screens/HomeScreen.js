import React from 'react';
import {View} from 'react-native';

import NoteItem from '../components/NoteItem';

const SOUNDS = [
  {noteName: 'c2'},
  {noteName: 'd2'},
  {noteName: 'e2'},
  {noteName: 'f2'},
  {noteName: 'g2'},
  {noteName: 'a2'},
  {noteName: 'b2'},
  {noteName: 'c3'},
  {noteName: 'd3'},
  {noteName: 'e3'},
  {noteName: 'f3'},
  {noteName: 'g3'},
  {noteName: 'a3'},
  {noteName: 'b3'},
  {noteName: 'c4'},
  {noteName: 'd4'},
  {noteName: 'e4'},
  {noteName: 'f4'},
  {noteName: 'g4'},
  {noteName: 'a4'},
  {noteName: 'b4'},
];

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          justifyContent: 'space-evenly',
          transform: [{rotateX: '180deg'}],
        }}>
        {SOUNDS.map((item) => (
          <NoteItem
            key={item.noteName}
            noteName={item.noteName}
            reverse={true}
          />
        ))}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {SOUNDS.map((item) => (
          <NoteItem key={item.noteName} noteName={item.noteName} />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
