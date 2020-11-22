import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider.android';

import Ionicons from 'react-native-vector-icons/Ionicons';

import PostCard2 from '../components/PostCard2';

import {Container} from '../styles/RecipeStyles2';

const Posts = [
  {
    id: '1',
    userName: 'Classic Pizza',
    userImg: require('../assets/circle.png'),
    postTime: '4 mins ago',
    post: 'Pizza like it was straight from Italy!',
    postImg: require('../assets/recipes/pizza.jpg'),
    likes: '14',
    loves: '5',
  },
  {
    id: '2',
    userName: 'Seared Tuna Steaks',
    userImg: require('../assets/circle2.png'),
    postTime: '2 hours ago',
    post: 'Straight from the Ocean to your plate!',
    postImg: require('../assets/recipes/tuna.jpg'),
    liked: true,
    loved: true,
    read: true,
    likes: '14',
    loves: '15',
  },
  {
    id: '3',
    userName: 'Stuffed Avocados',
    userImg: require('../assets/circle2.png'),
    postTime: '4 hours ago',
    post: 'So Healthy and Delicious!',
    postImg: require('../assets/recipes/avocado.jpg'),
    loved: true,
    likes: '21',
    loves: '56',
  },
  {
    id: '4',
    userName: 'Perfection Steak',
    userImg: require('../assets/circle.png'),
    postTime: '14 hours ago',
    post: "You'll never have tried Steak that is this Good!",
    postImg: require('../assets/recipes/steak.jpg'),

    likes: '4',
    loves: '5',
  },
];

const RecipesScreen = () => {
  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard2 item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default RecipesScreen;
