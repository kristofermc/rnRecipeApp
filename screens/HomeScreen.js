import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider.android';

import Ionicons from 'react-native-vector-icons/Ionicons';

import PostCard from '../components/PostCard';

import {Container} from '../styles/RecipeStyles';

const Posts = [
  {
    id: '1',
    userName: 'RecipesApp',
    userImg: require('../assets/circle.png'),
    postTime: 'Pinned Post',
    post:
      'Hey there and welcome to the Recipes App! You will find so many handy features and recipes that will save you so much time!',
    postImg: require('../assets/recipes/tuna.jpg'),
    liked: true,
    likes: '140',
    loves: '500',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/circle2.png'),
    postTime: '2 hours ago',
    post:
      'Just tried out the Classic Pizza Recipe and it was GREAT! Try it out!',
    postImg: 'none',
    liked: false,
    likes: '8',
    loves: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/circle2.png'),
    postTime: '1 hours ago',
    post:
      'Damn, that Tuna was indredile... Splashes of this Vintage Merlot only made it more juicy!!!',
    postImg: require('../assets/recipes/redwine.jpg'),
    liked: true,
    likes: '1',
    loves: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/circle3.png'),
    postTime: '1 day ago',
    post: 'Why do other Recipe Apps not have Timers?! This is great!',
    postImg: require('../assets/circle.png'),
    liked: true,
    likes: '22',
    loves: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/circle.png'),
    postTime: '2 days ago',
    post: 'Hey there, how is everyone doing? Have a great day!',
    postImg: 'none',
    liked: false,
    likes: '0',
    loves: '0',
  },
  {
    id: '6',
    userName: 'Jenny Doe',
    userImg: require('../assets/circle.png'),
    postTime: '4 mins ago',
    post:
      'I have not put this App down since I started using it, it is great!.',
    postImg: require('../assets/circle2.png'),
    liked: true,
    likes: '14',
    loves: '5',
  },
];

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Container>
      <View style={styles.Cont}>
        <Ionicons name="person" style={styles.Icon} />
        <Text style={styles.Text}>Welcome {user.uid}!!</Text>
        <Ionicons.Button
          style={styles.Button}
          name="power-outline"
          buttonTitle="Logout"
          onPress={() => logout()}
        />
      </View>

      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}></FlatList>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Button: {
    backgroundColor: '#eb4034',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  Icon: {
    color: '#eb4034',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 25,
    paddingBottom: 20,
  },
  Text: {
    paddingBottom: 30,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  Cont: {
    paddingBottom: 30,
  },
});
