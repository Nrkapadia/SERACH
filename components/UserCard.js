import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.mainCard}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
        }}
      />
      <View style={styles.userdetails}>
        <Text style={styles.text1}> {props.name} </Text>
        <Text style={styles.text2}> {props.username} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10.9,
    marginVertical: 5,
    paddingLeft: 12,
  },
  userdetails: {
    borderColor: 'white',
    borderWidth: 1,
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 30,
  },
  text1: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginLeft: 10,
    color: 'black',
  },
  text2: {
    fontSize: 14,
    textAlignVertical: 'center',
    marginLeft: 10.5,
    color: '#808080',
  },
});

export default UserCard;
