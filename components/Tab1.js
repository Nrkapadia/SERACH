import React, {useEffect, useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

import UserCard from './UserCard';

const Tab1 = props => {
  console.log(props);

  return (
    <View style={{backgroundColor: 'black'}}>
      <ScrollView style={styles.scrollScreen}>
        {props.user?.map((u, i) => {
          return <UserCard name={u.name} pic={u.profile_pic} key={i} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollScreen: {
    borderColor: 'yellow',
    borderWidth: 1,
    backgroundColor: 'black',
    height: Winheight * 0.85,
  },
});

export default Tab1;
