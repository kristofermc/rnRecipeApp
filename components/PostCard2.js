import React, {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
  TimeText,
  IngText,
  StepText,
  Button,
} from '../styles/RecipeStyles';

const PostCard2 = ({item}) => {
  readIcon = item.read ? 'reader' : 'reader-outline';
  readIconColor = item.read ? '#eb4034' : '#eb4034';
  readText = 'Read';

  closeIcon = item.close ? 'reader' : 'close-circle-outline';
  closeIconColor = item.close ? '#eb4034' : '#eb4034';

  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#eb4034' : '#eb4034';

  loveIcon = item.loved ? 'flame' : 'flame-outline';
  loveIconColor = item.loved ? '#eb4034' : '#eb4034';

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.loves == 1) {
    loveText = '1 Love';
  } else if (item.loves > 1) {
    loveText = item.loves + ' Loves';
  } else {
    loveText = 'Love';
  }
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>

      <PostText>{item.post}</PostText>
      {item.postImg != 'none' ? <PostImg source={item.postImg} /> : <Divider />}

      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction active={item.loved}>
          <Ionicons name={loveIcon} size={25} color={loveIconColor} />
          <InteractionText active={item.loved}>{loveText}</InteractionText>
        </Interaction>
        <Interaction
          active={item.read}
          onPress={() => setShouldShow(!shouldShow)}>
          <Ionicons name={readIcon} size={25} color={readIconColor} />
          <InteractionText active={item.read}>{readText}</InteractionText>
        </Interaction>
      </InteractionWrapper>

      {shouldShow ? (
        <>
          <TimeText>
            <Ionicons name={'timer-outline'} size={25} color={readIconColor} />
            {item.time}
          </TimeText>

          <InteractionWrapper>
            <IngText>{item.ing}</IngText>
            <IngText>{item.ing2}</IngText>
          </InteractionWrapper>
          <StepText>{item.steps}</StepText>
          <InteractionWrapper>
            <Interaction
              active={item.close}
              onPress={() => setShouldShow(!shouldShow)}>
              <Ionicons name={closeIcon} size={25} color={closeIconColor} />
              <InteractionText active={item.close}></InteractionText>
            </Interaction>
          </InteractionWrapper>
        </>
      ) : null}
    </Card>
  );
};

export default PostCard2;
