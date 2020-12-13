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
    likes: '144',
    loves: '512',

    time: ' Just over 1 Hour!',
    ing:
      '- 300g Plain Flour\n- 7g Yeast\n- 1/2 tsp Sugar\n- 1/2 tbsp Salt\n- 300ml Warm Water\n- 2 tbsp Olive Oil',
    ing2:
      '-  125g Mozzarella\n- 2 tbsp Tomato Purée\n- 4 tbsp Passata\n- Fresh Basil\n- Oregano\n- Black Pepper',
    steps:
      '1. Pour the Flour, Sugar, Salt, Yeast, into a bowl and mix them thoroughly\n\n2. Add the warm water and oil and, using a wooden spoon or rubber spatula, beat well for 1–2 minutes. The mixture will not look like regular pizza dough but more like soft mashed potato at this stage. Cover the bowl with cling film or a clean tea towel and leave in a draught-free place for 1 hour, or until doubled in size.\n\n3. Cover two large baking trays with baking paper and scoop half of the pizza base mixture into the middle of one. Using a rubber spatula or palette knife, spread the mixture into a neat 25cm/10in disc. Repeat with the remaining mixture on the second baking sheet. Set aside for 45 minutes.\n\n4. Preheat the oven to 220–230C/200–210C Fan/Gas 7–8. Place a heavy baking tray on the top shelf of the oven to heat up.\n\n5. Prick one pizza base a few times with a fork. Using the baking paper, slide the base carefully onto the hot baking tray. Cook for 9–10 minutes, or until starting to turn golden at the edges. Remove from the oven and cook the second base in the same way, ensuring the tray is hot before sliding on the second base.\n\n6. Reduce the oven temperature to 200C/180C Fan/Gas 6.\n\n7. Pat the mozzarella dry on kitchen paper and tear into small pieces. In a small bowl, mix together the passata and tomato purée and season with salt and pepper.\n\n8. Spread the tomato mixture over the pizza bases, leaving a 1cm/½in border all around. Lay the Mozzarella evenly over the Pizza. Season with black pepper and a pinch of dried oregano and cook each for 10 minutes, or until the cheese is bubbling and starting to brown.\n\n9. Garnish with Fresh Basil and serve immediately',
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
    likes: '14',
    loves: '15',

    time: ' Under 2 Minutes!',
    ing:
      '- 200g Tuna Steaks\n- 1 Lemon (Zest only)\n- 1 Garlic Clove\n- 2 tbsp Olive Oil',
    ing2: '-  1/4 Cucumber\n- 2 Radishes\n- Rocket Salad\n- Black Pepper',
    steps:
      '1. Rub the Tuna Steaks in the Lemon Zest and crushed Garlic. Next, add a large amount of Black Pepper. Leave this to marinade for roughly 2 hours in the fridge.\n\n2. Heat up a pan with the Olive Oil. Wait until it starts fiercely bubbling, then carefully lower the Tuna Steaks onto the hot pan\n\n3. Fry for 3 seconds a side\n\n4. Serve on a bed of Radish, Rocket Salad and Cucumber. Extra Pepper never goes amiss!!',
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

    time: ' Roughly 5 Minutes!',
    ing: '- 1 Tuna Tin\n- 4 tbsp Soy Sauce\n- 4 tbsp Salsa Sauce',
    ing2: '- 2 Ripe Avocado\n- 1 tbsp Honey\n- 1 Spring Onion',
    steps:
      '1. Cut the Avocado in half and take the stone out\n\n2. Mix the Tuna, Honey, Soy Sauce and Spring Onions together\n\n3. Add the Tuna Mixture inside the Avocado, where the Stone was.\n\n4. Drizzle the Salsa Sauce on top and serve immediately!',
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

    time: ' Less than 10 Minutes!',
    ing: '- 50g Tamarind Paste\n- 4 tbsp Soy Sauce\n- 4 tbsp Hot Water',
    ing2: '- 2 tbsp Sunflower Oil\n- 1 tbsp Honey\n- 750g Bavette Steak',
    steps:
      '1. Put the tamarind paste, soy and hot water into the smallest saucepan you have, and stir over a low heat to dissolve the tamarind. When it’s as smooth as you think you can get it – the tamarind paste I use says it’s without stones, but I do find the odd one, and I don’t bother to get rid of them – remove to a bowl or jug, whisk in the oil and honey, and leave to cool. Do not use until it is cold.\n\n2. Put the bavette steak into a resealable freezer bag, pour in the cold marinade and squelch it about so that the thin steak is covered on both sides, then seal, lay on a plate and put in the fridge overnight or for 1 day.\n\n3. Bring it back to room temperature, prepare a large piece of kitchen foil, then heat a ridged griddle till very, very hot. Lift the steak out of its marinade, letting any excess (and there will be a lot) drip back into the bag and then slap the meat on the griddle and cook for 2 minutes a side.\n\n4. Immediately (I use tongs for all this) transfer the steak to the piece of foil and make a tightly sealed but baggy parcel, and let the meat rest, on a chopping board, or any surface that is not too cold, for 5 minutes. Then unwrap the foil, transfer the steak to a board, and carve in thin slices against the grain.',
  },
  {
    id: '5',
    userName: 'Luscious Lasagne',
    userImg: require('../assets/circle.png'),
    postTime: '19 hours ago',
    post: 'Lasagne, simpler and better!',
    postImg: require('../assets/recipes/lasagne.jpg'),

    likes: '14',
    loves: '2',

    time: ' Under an hour',
    ing:
      '- 1 tsp Oil\n- 450g Pork Mince\n- 1 tsp Plain Flour\n- 1 Mild Chilli\n- 2 Garlic Cloves',
    ing2:
      '- 250g Mushrooms\n- 200ml crème fraîche\n- 100g Spinach\n- Salt\n- Pepper',
    steps:
      '1. Preheat the oven to 200C/180C Fan/Gas 6. Grease the ovenproof dish with butter or oil.\n\n2. Soak the lasagne sheets in recently boiled warm water to soften while you prepare the two sauces. \n\n3. For the pork and spinach sauce, heat the oil in a large, non-stick frying pan. Add the sausage meat and brown over a high heat for 5–10 minutes until golden-brown, breaking up the mince with two wooden spoons. Sprinkle in the flour and fry for a minute.\n\n4. Add the chilli, garlic and mushrooms and fry for about 5 minutes. Stir in the crème fraîche and spinach. Bring to the boil and allow to bubble for a couple of minutes. Season well with salt and pepper and set aside.\n\n5. For the tomato sauce, mix all the ingredients together in a jug or bowl and season well with salt and pepper.\n\n6. Drain the Lasagne Sheets.\n\n7. Spoon one-third of the spinach sauce into the base of the ovenproof dish. Spoon one-third of the tomato sauce on top and arrange half the lasagne sheets over the tomato sauce. Repeat using two more layers of spinach and tomato sauce and one of lasagne sheets. Sprinkle over the grated cheese.\n\n8. Bake for 30–35 minutes, or until the pasta is tender and the top of the dish is golden-brown and bubbling around the edges. Serve immediately.',
  },
  {
    id: '6',
    userName: 'Fiery Jamaican Curry!',
    userImg: require('../assets/circle2.png'),
    postTime: '1 day ago',
    post: "You'll never have tried Steak that is this Good!",
    postImg: require('../assets/recipes/curry.jpg'),

    likes: '40',
    loves: '56',

    time: ' 2 hours',
    ing:
      '- 6 Chicken Thighs\n- 1 tsp Sea Salt\n- 1 tsp Black Pepper\n- 3 tbsp Curry Powder\n- 4 tbsp Vegetable Oil\n- 1 Medium Onion',
    ing2:
      '- 4 Garlic Cloves\n- 2 Spring Onions\n- 1 Spicy Chilli\n- 1 Large Potato\n- 1 Carrot\n- Fresh Coriander',
    steps:
      '1. To make the curry chicken, season the chicken with the salt, pepper and a tablespoon of curry powder in a large bowl, rubbing to cover the meat completely. Cover and marinate in the fridge for a few hours.\n\n2. Heat the oil in a saucepan over a medium heat and add the onion and garlic. Cook for 5–7 minutes, or until soft. Add the remaining curry powder and a little water, stir and cook for 3 minutes, or until browned. \n\n3. Add the marinated chicken and brown for a few minutes, then add 500ml/18fl oz water and cook for a few more minutes. Add the spring onions, chilli, potato and carrot and cook for 20 minutes, or until the chicken is cooked through and the vegetables are tender. Take out the chilli before serving. \n\n4. Serve the Chicken garnished with Rice, Coconut Rice is recommended! Finally, garnish the Chicken with Fresh Coriander',
  },
  {
    id: '7',
    userName: 'Brilliant Spaghetti',
    userImg: require('../assets/circle2.png'),
    postTime: '2 days ago',
    post: 'Make even the Italians jealous!',
    postImg: require('../assets/recipes/spaghetti.jpg'),

    likes: '4',
    loves: '5',

    time: ' 1 hour',
    ing:
      '- 2 tbsp Olive Oil\n- 1 Medium Carrot\n- 1 Medium Onion\n- 2 Garlic Cloves\n- 50ml Red Wine\n- 400ml Beef Stock',
    ing2:
      '- 400g Beef Mince\n- 800g Chopped Tomatoes\n- 400g Dried Spaghetti\n- Salt\n- Pepper\n- Parmesan Cheese',
    steps:
      '1. Heat a large saucepan over a medium heat. Add a tablespoon of olive oil and once hot add the beef mince and a pinch of salt and pepper. Cook the mince until well browned over a medium-high heat (be careful not to burn the mince. It just needs to be a dark brown colour). Once browned, transfer the mince to a bowl and set aside.\n\n2. Add another tablespoon of oil to the saucepan you browned the mince in and turn the heat to medium. Add the onions and a pinch of salt and fry gently for 5-6 minutes, or until softened and translucent. Add the garlic and cook for another 2 minutes. Add the grated carrot then pour the mince and any juices in the bowl back into the saucepan.\n\n3. Add the tomatoes to the pan and stir well to mix. Pour in the stock, bring to a simmer and then reduce the temperature to simmer gently for 45 minutes, or until the sauce is thick and rich. Taste and adjust the seasoning as necessary.\n\n4. When ready to cook the spaghetti, heat a large saucepan of water and add a pinch of salt. Cook according to the packet instructions. Once the spaghetti is cooked through, drain and add to the pan with the bolognese sauce. Mix well and serve with parmesan.',
  },
];

const RecipesScreen = ({navigate}) => {
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
