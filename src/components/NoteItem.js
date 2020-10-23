import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const NoteItem = ({noteName, reverse}) => {
  var noteSharp = null;

  if (noteName.match(/^[abdeg]/)) {
    noteSharp = noteName[0] + 'b' + noteName[1];
  }

  const playNote = (noteNm) => {
    const whoosh = new Sound(`${noteNm}.mp3`, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        whoosh.play(() => {
          setTimeout(() => {
            for (let i = 0; i < 2000; i++) {
              whoosh.setVolume(1.0 - i / 2000);
            }
          }, 1);
          whoosh.release();
        });
      }
    });
  };

  return (
    <View>
      <TouchableHighlight
        onPress={() => {}}
        activeOpacity={0}
        underlayColor="yellow"
        style={{position: 'relative', zIndex: 1}}>
        <View
          onTouchStart={() => playNote(noteName)}
          style={styles.noteStyle}></View>
      </TouchableHighlight>
      {noteSharp && (
        <TouchableHighlight
          onPress={() => {}}
          activeOpacity={0}
          underlayColor="yellow"
          style={{position: 'absolute', left: reverse ? 20 : -14, zIndex: 100}}>
          <View
            onTouchStart={() => playNote(noteSharp)}
            style={{
              ...styles.noteStyle,
              width: 28,
              height: 120,
              backgroundColor: 'black',
            }}></View>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  noteStyle: {
    width: 34,
    height: '100%',
    borderWidth: 0.5,
    borderColor: '#333',
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default NoteItem;
