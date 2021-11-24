import React, {useEffect, useState} from 'react';

import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';

import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import UserCard from './components/UserCard';
import ContestCard from './components/ContestCard';
import Pools from './components/Pools';
import Challenges from './components/Challenges';

// import {SearchBar} from 'react-native-elements';
import {Searchbar} from 'react-native-paper';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;
const Tab = createMaterialTopTabNavigator();

const App = ({navigation}) => {
  const [text, setText] = useState('');
  const [user, setUser] = useState([]);
  const [contest, setContest] = useState([]);
  const [pools, setPools] = useState([]);
  const [challenges, setChallneges] = useState([]);

  const Tab1 = props => {
    // console.log(props);
    return (
      <ScrollView style={styles.scrollScreen}>
        {user?.map((u, i) => {
          return (
            <UserCard
              name={u.name}
              username="abcd"
              pic={u.profile_pic}
              key={i}
            />
          );
        })}
      </ScrollView>
    );
  };

  const Tab2 = props => {
    // console.log(props);
    return (
      <ScrollView style={styles.scrollScreen}>
        {contest?.map((u, i) => {
          return <ContestCard cname={u.cname} talent={u.talent} key={i} />;
        })}
      </ScrollView>
    );
  };

  const Tab3 = () => {
    return (
      <ScrollView style={styles.scrollScreen}>
        {pools?.map((u, i) => {
          return <Pools pool_name={u.pool_name} talent={u.talent} key={i} />;
        })}
      </ScrollView>
    );
  };

  const Tab4 = () => {
    return (
      <ScrollView style={styles.scrollScreen}>
        {challenges?.map((u, i) => {
          return <Challenges ch_name={u.ch_name} talent={u.talent} key={i} />;
        })}
      </ScrollView>
    );
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://contest-test-2.herokuapp.com/search/find?word=${text}`,
      );

      await setUser(res.data.users);
      await setContest(res.data.contest);
      await setPools(res.data.pools);
      await setChallneges(res.data.challenges);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mainScreen}>
      <View style={styles.up}>
        {/* <TextInput
          style={styles.input}
          onChangeText={async t => {
            // console.log(t);

            if (t === '') {
              await setUser([]);
              return;
            }
            await setText(t);
            // handleSearch();
          }}
          value={text}
          onSubmitEditing={() => {
            handleSearch();
          }}
        /> */}

        <Searchbar
          placeholder="Search Here"
          style={styles.search}
          onChangeText={async t => {
            if (t === '') {
              await setUser([]);
              await setContest([]);
              await setPools([]);
              await setChallneges([]);
              await setText('');
              return;
            }
            await setText(t);
          }}
          value={text}
          onSubmitEditing={() => {
            handleSearch();
          }}
        />
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            handleSearch();
            // navigation.navigate('users');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            search
          </Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.bottom}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
              },
              tabBarActiveTintColor: 'black',
              tabBarPressColor: 'white',
              tabBarIndicatorStyle: {backgroundColor: 'black'},
              tabBarItemStyle: {
                padding: 0,
                height: Winheight * 0.06,
                width: Winwidth * 0.25,
                fontFamily: 'Montserrat-SemiBold',
                // borderWidth:2
                alignSelf: 'flex-start',
                // backgroundolor:'blue'
              },
            }}>
            <Tab.Screen name="Users" component={Tab1} />
            <Tab.Screen name="Contest" component={Tab2} />
            <Tab.Screen name="Pools" component={Tab3} />
            <Tab.Screen name="Challenges" component={Tab4} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: Winheight,
    borderColor: '#909090',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    color: 'black',
    fontSize: 20,
    width: Winwidth * 0.95,
  },
  btn: {
    width: Winwidth * 0.95,
    backgroundColor: '#050152',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 15,
  },
  search: {
    marginTop: 10, //change
    marginLeft: 15, //change
    marginRight: 15, //change
    elevation: 4, //change
    borderRadius: 10.9, //change
    backgroundColor: '#E0E0E0',
  },
  up: {
    height: Winheight * 0.08,
    backgroundColor: 'white',
  },
  bottom: {
    height: Winheight * 0.92,
    marginBottom: 5,
    width: Winwidth,
  },
  scrollScreen: {
    backgroundColor: 'white',
    height: Winheight * 0.85,
    width: Winwidth,
  },
});

export default App;
